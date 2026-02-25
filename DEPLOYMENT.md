# Deployment Instructions

## Step 1: Prepare Repository

This folder contains all the files needed for deployment.

**IMPORTANT: Run these commands from THIS deployment folder, not the source directory!**

### 📁 Files Included

- ✅ Source code (src/)
- ✅ Public assets (public/)
- ✅ Package configuration (package.json)
- ✅ Deployment config with preloaded images
- ✅ .gitignore (excludes node_modules/, build/, etc.)

**Note:** The `.gitignore` file is configured to exclude:
- `node_modules/` - Will be reinstalled on Vercel
- `build/` - Will be rebuilt on Vercel
- IDE and OS temporary files

This keeps your repository clean and avoids uploading large files to GitHub.

```bash
# Make sure you're in the deployment folder
pwd  # Should show: .../deployments/your-project-name-timestamp

# Install dependencies and test build
npm install
npm run build

# Initialize git repository
git init
git add .
git commit -m "Initial survey deployment setup"

# Add remote repository (replace with your GitHub repo URL)
git remote add origin https://github.com/yourusername/your-survey-repo.git
git branch -M main
git push -u origin main
```

## Step 2: Deploy to Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your GitHub repository
3. Configure environment variables:
   - Copy values from `.env.example`
   - Set them in Vercel dashboard under Settings → Environment Variables
4. Deploy!

## Step 3: Test Your Survey

- Live Survey: `https://your-project.vercel.app/`

**Note:** This deployment is survey-only. No admin panel is included in the deployed version.

## Preloaded Images

✅ This deployment includes 30 preloaded images from Hugging Face.
This will significantly improve loading speed for survey participants.

---
Generated on: 09:53:46 25/2/2026
