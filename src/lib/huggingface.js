/**
 * Hugging Face Dataset Integration
 * Provides functions to connect to and retrieve images from Hugging Face datasets
 */

/**
 * Extract the best available image URL from Hugging Face API response
 * Note: Datasets Server API usually only provides temporary URLs (with expiration)
 * Permanent URLs are only available if the API response includes a 'path' field
 *
 * @param {object} imageData - Image data object from HF API
 * @param {string} datasetName - Dataset name
 * @returns {string|null} - Image URL (permanent if path is available, temporary otherwise)
 */
const getPermanentImageUrl = (imageData, datasetName) => {
  // Priority 1: If there's a path field, construct permanent URL
  // This is the ONLY way to get a true permanent URL
  if (imageData.path) {
    const permanentUrl = `https://huggingface.co/datasets/${datasetName}/resolve/main/${imageData.path}`;
    console.log(`🔗 Using permanent URL from path: ${permanentUrl}`);
    return permanentUrl;
  }

  // Priority 2: Check if there's a permanent URL field
  if (imageData.permanentUrl || imageData.permanent_url) {
    console.log(`🔗 Using provided permanent URL`);
    return imageData.permanentUrl || imageData.permanent_url;
  }

  // Priority 3: Use temporary URL from datasets-server
  // These URLs work but will expire (typically in 24 hours)
  const tempUrl = imageData.src || imageData.url;
  if (tempUrl) {
    console.log(
      `⏰ Using temporary URL (will expire): ${tempUrl.substring(0, 100)}...`,
    );
  }
  return tempUrl;
};

// Cache for API responses to reduce requests
const apiCache = new Map();
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

// Rate limiting
let lastRequestTime = 0;
const MIN_REQUEST_INTERVAL = 1000; // 1 second between requests

/**
 * Delay to respect rate limits
 */
const respectRateLimit = async () => {
  const now = Date.now();
  const timeSinceLastRequest = now - lastRequestTime;
  if (timeSinceLastRequest < MIN_REQUEST_INTERVAL) {
    const delay = MIN_REQUEST_INTERVAL - timeSinceLastRequest;
    console.log(`⏱️ Rate limiting: waiting ${delay}ms before next request`);
    await new Promise((resolve) => setTimeout(resolve, delay));
  }
  lastRequestTime = Date.now();
};

/**
 * Fetch with cache (caches parsed JSON data)
 */
const cachedFetch = async (url, options = {}) => {
  // Check cache first
  const cacheKey = `${url}_${JSON.stringify(options)}`;
  const cached = apiCache.get(cacheKey);
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    console.log(`📦 Using cached data for: ${url.substring(0, 80)}...`);
    // Return a Response-like object with the cached data
    return {
      ok: true,
      status: 200,
      json: async () => cached.data,
      _fromCache: true,
    };
  }

  // Respect rate limit
  await respectRateLimit();

  // Make request
  try {
    const response = await fetch(url, options);

    // Cache successful JSON responses
    if (response.ok) {
      try {
        const data = await response.json();
        apiCache.set(cacheKey, {
          data: data,
          timestamp: Date.now(),
        });
        // Return a Response-like object with the data
        return {
          ok: true,
          status: 200,
          json: async () => data,
          _fromCache: false,
        };
      } catch (jsonError) {
        console.error("Failed to parse JSON:", jsonError);
        return response;
      }
    }

    return response;
  } catch (error) {
    // If rate limited, wait and retry once
    if (error.message.includes("429") || error.message.includes("Too Many")) {
      console.warn("⚠️ Rate limit hit, waiting 5 seconds before retry...");
      await new Promise((resolve) => setTimeout(resolve, 5000));
      return cachedFetch(url, options); // Use cachedFetch for retry, not raw fetch
    }
    throw error;
  }
};

/**
 * Test connection to Hugging Face dataset
 * @param {string} token - Hugging Face access token
 * @param {string} datasetName - Dataset name (e.g., "username/dataset-name")
 * @returns {Promise<{success: boolean, datasetInfo?: object, error?: string}>}
 */
export const testHuggingFaceConnection = async (token, datasetName) => {
  try {
    // Try datasets-server API first (more reliable for public datasets)
    console.log(`Testing connection to dataset: ${datasetName}`);

    try {
      const datasetsServerResponse = await cachedFetch(
        `https://datasets-server.huggingface.co/info?dataset=${datasetName}`,
      );

      if (datasetsServerResponse.ok) {
        const datasetsServerInfo = await datasetsServerResponse.json();
        console.log("Successfully connected via datasets-server API");

        // Try to get image count
        let imageCount = 0;
        try {
          const imageCountResult = await getImageCountFromDataset(
            token,
            datasetName,
          );
          imageCount = imageCountResult.imageCount || 0;
        } catch (countError) {
          console.warn("Could not get image count:", countError);
        }

        // ✅ Extract only useful info, filter out huge unnecessary metadata
        const {
          dataset_info,
          pending,
          partial,
          failed,
          download_checksums,
          ...cleanInfo
        } = datasetsServerInfo;

        // Keep only essential dataset_info fields (without download_checksums)
        let essentialDatasetInfo = null;
        if (dataset_info) {
          const configs = Object.keys(dataset_info);
          if (configs.length > 0) {
            const firstConfig = dataset_info[configs[0]];
            const {
              download_checksums: dc,
              download_size,
              dataset_size,
              ...essentialFields
            } = firstConfig;
            essentialDatasetInfo = {
              [configs[0]]: essentialFields,
            };
          }
        }

        return {
          success: true,
          datasetInfo: {
            id: datasetName,
            description: `Dataset accessed via datasets-server API`,
            author: datasetName.split("/")[0] || "unknown",
            lastModified: new Date().toISOString(),
            private: false,
            imageCount: imageCount,
            dataset_info: essentialDatasetInfo,
            ...cleanInfo,
          },
        };
      }
    } catch (datasetsServerError) {
      console.warn(
        "datasets-server API failed, trying traditional API:",
        datasetsServerError,
      );
    }

    // Fallback to traditional Hugging Face API
    const headers = {
      "Content-Type": "application/json",
    };

    // Only add Authorization header if token is provided
    if (token && token.trim()) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    const response = await cachedFetch(
      `https://huggingface.co/api/datasets/${datasetName}`,
      {
        headers,
      },
    );

    if (!response.ok) {
      if (response.status === 401) {
        if (!token || !token.trim()) {
          throw new Error(
            `Dataset "${datasetName}" requires authentication. Please provide a Hugging Face Access Token.`,
          );
        } else {
          throw new Error(
            `Invalid or expired Hugging Face Access Token. Please check your token.`,
          );
        }
      } else if (response.status === 404) {
        throw new Error(
          `Dataset "${datasetName}" not found. Please check the dataset name.`,
        );
      } else {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
    }

    const datasetInfo = await response.json();

    return {
      success: true,
      datasetInfo,
    };
  } catch (error) {
    console.error("Hugging Face connection test failed:", error);
    console.error("Error details:", {
      message: error.message,
      stack: error.stack,
      name: error.name,
    });
    return {
      success: false,
      error: error.message,
    };
  }
};

/**
 * Get images from Hugging Face dataset
 * @param {string} token - Hugging Face access token
 * @param {string} datasetName - Dataset name
 * @param {number} limit - Maximum number of images to retrieve
 * @param {number} offset - Offset for pagination
 * @returns {Promise<{success: boolean, images?: Array, total?: number, error?: string}>}
 */
const IMAGE_EXT_RE = /\.(png|jpe?g|webp|gif|bmp|tiff?)$/i;

const resolveMainUrl = (datasetName, path, revision = "main") =>
  `https://huggingface.co/datasets/${datasetName}/resolve/${revision}/${path
    .split("/")
    .map(encodeURIComponent)
    .join("/")}`;

export const getImagesFromHuggingFace = async (
  token,
  datasetName,
  limit = 500,
  offset = 0,
) => {
  try {
    const headers = { "Content-Type": "application/json" };
    if (token && token.trim()) headers["Authorization"] = `Bearer ${token}`;

    // 1) Get repo file list (siblings)
    const metaRes = await cachedFetch(
      `https://huggingface.co/api/datasets/${datasetName}`,
      { headers },
    );

    if (!metaRes.ok) {
      throw new Error(`Cannot access dataset meta: HTTP ${metaRes.status}`);
    }

    const meta = await metaRes.json();
    const siblings = Array.isArray(meta.siblings) ? meta.siblings : [];

    // 2) Filter image files
    const imageFiles = siblings
      .map((x) => x?.rfilename)
      .filter(Boolean)
      .filter((name) => IMAGE_EXT_RE.test(name))
      .sort((a, b) => a.localeCompare(b)); // stable pagination

    const total = imageFiles.length;
    const page = imageFiles.slice(offset, offset + limit);

    const images = page.map((path, idx) => ({
      url: resolveMainUrl(datasetName, path, "main"), // ✅ permanent
      name: `${datasetName.replace("/", "_")}_${offset + idx}`,
      metadata: {
        dataset: datasetName,
        path,
        rowIndex: offset + idx,
        isPermanent: true,
      },
    }));

    return { success: true, images, total };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

/**
 * Get random images from Hugging Face dataset
 * @param {string} token - Hugging Face access token
 * @param {string} datasetName - Dataset name
 * @param {number} count - Number of random images to get
 * @returns {Promise<{success: boolean, images?: Array, error?: string}>}
 */
export const getRandomImagesFromHuggingFace = async (
  token,
  datasetName,
  count = 10,
) => {
  try {
    console.log(`🎲 Getting ${count} random images from ${datasetName}`);

    // Strategy: Load a larger batch of images (up to 100) and randomly select from them
    // This reduces API calls significantly compared to fetching one image at a time

    // Calculate how many images to fetch (at least 2x the requested count, max 100)
    const batchSize = Math.min(Math.max(count * 2, 20), 100);

    // Get a batch of images starting from a random offset
    const totalResponse = await getImageCountFromDataset(token, datasetName);
    const total = totalResponse.imageCount || 500; // Default fallback

    console.log(
      `📊 Dataset has ${total} total images, fetching batch of ${batchSize}`,
    );

    // Random starting offset (but ensure we can fetch enough)
    const maxOffset = Math.max(0, total - batchSize);
    const randomOffset = Math.floor(Math.random() * (maxOffset + 1));

    console.log(
      `📥 Fetching ${batchSize} images starting from offset ${randomOffset}`,
    );

    // Fetch the batch
    const response = await getImagesFromHuggingFace(
      token,
      datasetName,
      batchSize,
      randomOffset,
    );

    if (!response.success || !response.images || response.images.length === 0) {
      console.error("Failed to fetch image batch:", response.error);
      return response;
    }

    console.log(`✅ Fetched ${response.images.length} images from batch`);

    // Randomly select the requested number of images from the batch
    const shuffled = [...response.images].sort(() => 0.5 - Math.random());
    const selectedImages = shuffled.slice(0, Math.min(count, shuffled.length));

    console.log(`🎯 Selected ${selectedImages.length} random images`);

    return {
      success: true,
      images: selectedImages,
    };
  } catch (error) {
    console.error("Failed to get random images from Hugging Face:", error);
    return {
      success: false,
      error: error.message,
    };
  }
};

/**
 * Get image count from Hugging Face dataset
 * @param {string} token - Hugging Face access token (optional)
 * @param {string} datasetName - Dataset name
 * @returns {Promise<{imageCount: number}>}
 */
export const getImageCountFromDataset = async (token, datasetName) => {
  try {
    // Use rows API to get the count - it's more reliable
    console.log(`Getting image count for dataset: ${datasetName}`);

    const viewerResponse = await cachedFetch(
      `https://datasets-server.huggingface.co/rows?dataset=${datasetName}&config=default&split=train&offset=0&length=1`,
    );

    if (viewerResponse.ok) {
      const viewerData = await viewerResponse.json();
      console.log("Dataset count response:", viewerData);

      // Check for num_rows_total in the response
      if (viewerData.num_rows_total !== undefined) {
        console.log(`Found ${viewerData.num_rows_total} images in dataset`);
        return { imageCount: viewerData.num_rows_total };
      }
    }

    // Fallback: Try to get images and count them
    console.log("Fallback: Getting images to count them");
    const result = await getImagesFromHuggingFace(token, datasetName, 100, 0);

    if (result.success) {
      // Use the total if available
      if (result.total) {
        console.log(`Found ${result.total} images via fallback`);
        return { imageCount: result.total };
      } else if (result.images) {
        // Count actual images found
        console.log(`Found ${result.images.length} images via fallback`);
        return { imageCount: result.images.length };
      }
    }

    console.warn("Could not determine image count, returning 0");
    return { imageCount: 0 };
  } catch (error) {
    console.error("Error getting image count:", error);
    return { imageCount: 0 };
  }
};

/**
 * Check if Hugging Face dataset integration is configured
 * @param {object} config - Image dataset configuration
 * @returns {boolean}
 */
export const isHuggingFaceConfigured = (config) => {
  return !!(config && config.enabled && config.datasetName);
};
