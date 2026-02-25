// Auto-generated deployment configuration
// Generated on: 09:53:46 25/2/2026

export const deploymentConfig = {
  "id": "proj_1771910596605_5ey4c1da5",
  "name": "ISCM Survey (Vie)",
  "description": "Kháo sát này giúp chúng tôi hiểu được nhận thức và ý kiến của bạn",
  "createdAt": "2026-02-24T05:23:16.605Z",
  "lastModified": "2026-02-24T05:23:16.605Z",
  "templateId": null,
  "supabaseConfig": null,
  "imageDatasetConfig": {
    "enabled": true,
    "huggingFaceToken": "",
    "datasetName": "Zennie0804/TenImageTest",
    "supabaseUrl": "https://dxmxjxgllefumbbhmqwt.supabase.co",
    "supabaseKey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR4bXhqeGdsbGVmdW1iYmhtcXd0Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MTg2OTA3OSwiZXhwIjoyMDg3NDQ1MDc5fQ.LZNGYnWlx1Sw9hl3uYv4ZFqkoQkpNUtxj7AngVL_uAs",
    "datasetInfo": {
      "id": "Zennie0804/TenImageTest",
      "description": "Dataset accessed via datasets-server API",
      "author": "Zennie0804",
      "lastModified": "2026-02-24T05:23:32.053Z",
      "private": false,
      "imageCount": 30,
      "dataset_info": {
        "default": {
          "description": "",
          "citation": "",
          "homepage": "",
          "license": "",
          "features": {
            "image": {
              "_type": "Image"
            }
          },
          "builder_name": "imagefolder",
          "dataset_name": "ten_image_test",
          "config_name": "default",
          "version": {
            "version_str": "0.0.0",
            "major": 0,
            "minor": 0,
            "patch": 0
          },
          "splits": {
            "train": {
              "name": "train",
              "num_bytes": 76794944,
              "num_examples": 30,
              "dataset_name": "ten_image_test"
            }
          },
          "size_in_bytes": 153589413
        }
      }
    },
    "supabaseConnectionStatus": {
      "connected": true,
      "projectInfo": {
        "url": "https://dxmxjxgllefumbbhmqwt.supabase.co",
        "bucketsCount": 1,
        "surveyBucketExists": true,
        "buckets": [
          "survey-images"
        ]
      },
      "lastTested": "2026-02-24T05:33:08.820Z"
    }
  },
  "serverSetupComplete": true,
  "serverSetupCompletedAt": "2026-02-25T02:53:43.738Z",
  "title": "Khảo sát nhận thức",
  "logo": "",
  "logoPosition": "left",
  "settings": {
    "showQuestionNumbers": "off",
    "showProgressBar": "aboveheader",
    "progressBarType": "questions",
    "autoGrowComment": true,
    "showPreviewBeforeComplete": "showAllQuestions"
  },
  "images": [],
  "pages": [
    {
      "name": "page1",
      "title": "An toàn",
      "description": "",
      "elements": [
        {
          "type": "imagepicker",
          "name": "question_1771911273421",
          "title": "Theo bạn, nơi nào trông an toàn hơn?",
          "isRequired": true,
          "imageCount": 2,
          "imageSelectionMode": "huggingface_random",
          "randomImageSelection": true,
          "imageFit": "cover"
        },
        {
          "type": "imagepicker",
          "name": "question_1771911273422",
          "title": "Theo bạn, nơi nào trông an toàn hơn?",
          "isRequired": true,
          "imageCount": 2,
          "imageSelectionMode": "huggingface_random",
          "randomImageSelection": true,
          "imageFit": "cover"
        },
        {
          "type": "imagepicker",
          "name": "question_1771911273423",
          "title": "Theo bạn, nơi nào trông an toàn hơn?",
          "isRequired": true,
          "imageCount": 2,
          "imageSelectionMode": "huggingface_random",
          "randomImageSelection": true,
          "imageFit": "cover"
        },
        {
          "type": "imagepicker",
          "name": "question_1771911273424",
          "title": "Theo bạn, nơi nào trông an toàn hơn?",
          "isRequired": true,
          "imageCount": 2,
          "imageSelectionMode": "huggingface_random",
          "randomImageSelection": true,
          "imageFit": "cover"
        },
        {
          "type": "imagepicker",
          "name": "question_1771911273425",
          "title": "Theo bạn, nơi nào trông an toàn hơn?",
          "isRequired": true,
          "imageCount": 2,
          "imageSelectionMode": "huggingface_random",
          "randomImageSelection": true,
          "imageFit": "cover"
        },
        {
          "type": "imagepicker",
          "name": "question_1771911273426",
          "title": "Theo bạn, nơi nào trông an toàn hơn?",
          "isRequired": true,
          "imageCount": 2,
          "imageSelectionMode": "huggingface_random",
          "randomImageSelection": true,
          "imageFit": "cover"
        }
      ]
    },
    {
      "name": "page_1771911195652",
      "title": "Sinh động",
      "description": "",
      "elements": [
        {
          "type": "imagepicker",
          "name": "question_1771911370458",
          "title": "Theo bạn, nơi nào trông sinh động hơn?",
          "isRequired": true,
          "imageCount": 2,
          "imageSelectionMode": "huggingface_random",
          "randomImageSelection": true,
          "imageFit": "cover"
        },
        {
          "type": "imagepicker",
          "name": "question_1771911370459",
          "title": "Theo bạn, nơi nào trông sinh động hơn?",
          "isRequired": true,
          "imageCount": 2,
          "imageSelectionMode": "huggingface_random",
          "randomImageSelection": true,
          "imageFit": "cover"
        },
        {
          "type": "imagepicker",
          "name": "question_1771911370460",
          "title": "Theo bạn, nơi nào trông sinh động hơn?",
          "isRequired": true,
          "imageCount": 2,
          "imageSelectionMode": "huggingface_random",
          "randomImageSelection": true,
          "imageFit": "cover"
        },
        {
          "type": "imagepicker",
          "name": "question_1771911370461",
          "title": "Theo bạn, nơi nào trông sinh động hơn?",
          "isRequired": true,
          "imageCount": 2,
          "imageSelectionMode": "huggingface_random",
          "randomImageSelection": true,
          "imageFit": "cover"
        },
        {
          "type": "imagepicker",
          "name": "question_1771911370462",
          "title": "Theo bạn, nơi nào trông sinh động hơn?",
          "isRequired": true,
          "imageCount": 2,
          "imageSelectionMode": "huggingface_random",
          "randomImageSelection": true,
          "imageFit": "cover"
        },
        {
          "type": "imagepicker",
          "name": "question_1771911370463",
          "title": "Theo bạn, nơi nào trông sinh động hơn?",
          "isRequired": true,
          "imageCount": 2,
          "imageSelectionMode": "huggingface_random",
          "randomImageSelection": true,
          "imageFit": "cover"
        }
      ]
    },
    {
      "name": "page_1771911411625",
      "title": "Đẹp",
      "description": "",
      "elements": [
        {
          "type": "imagepicker",
          "name": "question_1771911447100",
          "title": "Theo bạn, nơi nào trông đẹp hơn?",
          "isRequired": true,
          "imageCount": 2,
          "imageSelectionMode": "huggingface_random",
          "randomImageSelection": true,
          "imageFit": "cover"
        },
        {
          "type": "imagepicker",
          "name": "question_1771911447101",
          "title": "Theo bạn, nơi nào trông đẹp hơn?",
          "isRequired": true,
          "imageCount": 2,
          "imageSelectionMode": "huggingface_random",
          "randomImageSelection": true,
          "imageFit": "cover"
        },
        {
          "type": "imagepicker",
          "name": "question_1771911447102",
          "title": "Theo bạn, nơi nào trông đẹp hơn?",
          "isRequired": true,
          "imageCount": 2,
          "imageSelectionMode": "huggingface_random",
          "randomImageSelection": true,
          "imageFit": "cover"
        },
        {
          "type": "imagepicker",
          "name": "question_1771911447103",
          "title": "Theo bạn, nơi nào trông đẹp hơn?",
          "isRequired": true,
          "imageCount": 2,
          "imageSelectionMode": "huggingface_random",
          "randomImageSelection": true,
          "imageFit": "cover"
        },
        {
          "type": "imagepicker",
          "name": "question_1771911447104",
          "title": "Theo bạn, nơi nào trông đẹp hơn?",
          "isRequired": true,
          "imageCount": 2,
          "imageSelectionMode": "huggingface_random",
          "randomImageSelection": true,
          "imageFit": "cover"
        },
        {
          "type": "imagepicker",
          "name": "question_1771911447105",
          "title": "Theo bạn, nơi nào trông đẹp hơn?",
          "isRequired": true,
          "imageCount": 2,
          "imageSelectionMode": "huggingface_random",
          "randomImageSelection": true,
          "imageFit": "cover"
        }
      ]
    },
    {
      "name": "page_1771911495416",
      "title": "Sang trọng, Giàu có",
      "description": "",
      "elements": [
        {
          "type": "imagepicker",
          "name": "question_1771911597125",
          "title": "Theo bạn, nơi nào trông sang trọng, giàu có hơn?",
          "isRequired": true,
          "imageCount": 2,
          "imageSelectionMode": "huggingface_random",
          "randomImageSelection": true,
          "imageFit": "cover"
        },
        {
          "type": "imagepicker",
          "name": "question_1771911597126",
          "title": "Theo bạn, nơi nào trông sang trọng, giàu có hơn?",
          "isRequired": true,
          "imageCount": 2,
          "imageSelectionMode": "huggingface_random",
          "randomImageSelection": true,
          "imageFit": "cover"
        },
        {
          "type": "imagepicker",
          "name": "question_1771911597127",
          "title": "Theo bạn, nơi nào trông sang trọng, giàu có hơn?",
          "isRequired": true,
          "imageCount": 2,
          "imageSelectionMode": "huggingface_random",
          "randomImageSelection": true,
          "imageFit": "cover"
        },
        {
          "type": "imagepicker",
          "name": "question_1771911597128",
          "title": "Theo bạn, nơi nào trông sang trọng, giàu có hơn?",
          "isRequired": true,
          "imageCount": 2,
          "imageSelectionMode": "huggingface_random",
          "randomImageSelection": true,
          "imageFit": "cover"
        },
        {
          "type": "imagepicker",
          "name": "question_1771911597129",
          "title": "Theo bạn, nơi nào trông sang trọng, giàu có hơn?",
          "isRequired": true,
          "imageCount": 2,
          "imageSelectionMode": "huggingface_random",
          "randomImageSelection": true,
          "imageFit": "cover"
        },
        {
          "type": "imagepicker",
          "name": "question_1771911597130",
          "title": "Theo bạn, nơi nào trông sang trọng, giàu có hơn?",
          "isRequired": true,
          "imageCount": 2,
          "imageSelectionMode": "huggingface_random",
          "randomImageSelection": true,
          "imageFit": "cover"
        }
      ]
    },
    {
      "name": "page_1771911655619",
      "title": "Chán, buồn",
      "description": "",
      "elements": [
        {
          "type": "imagepicker",
          "name": "question_1771911693816",
          "title": "Theo bạn, nơi nào trông chán, buồn hơn?",
          "isRequired": true,
          "imageCount": 2,
          "imageSelectionMode": "huggingface_random",
          "randomImageSelection": true,
          "imageFit": "cover"
        },
        {
          "type": "imagepicker",
          "name": "question_1771911693817",
          "title": "Theo bạn, nơi nào trông chán, buồn hơn?",
          "isRequired": true,
          "imageCount": 2,
          "imageSelectionMode": "huggingface_random",
          "randomImageSelection": true,
          "imageFit": "cover"
        },
        {
          "type": "imagepicker",
          "name": "question_1771911693818",
          "title": "Theo bạn, nơi nào trông chán, buồn hơn?",
          "isRequired": true,
          "imageCount": 2,
          "imageSelectionMode": "huggingface_random",
          "randomImageSelection": true,
          "imageFit": "cover"
        },
        {
          "type": "imagepicker",
          "name": "question_1771911693819",
          "title": "Theo bạn, nơi nào trông chán, buồn hơn?",
          "isRequired": true,
          "imageCount": 2,
          "imageSelectionMode": "huggingface_random",
          "randomImageSelection": true,
          "imageFit": "cover"
        },
        {
          "type": "imagepicker",
          "name": "question_1771911693820",
          "title": "Theo bạn, nơi nào trông chán, buồn hơn?",
          "isRequired": true,
          "imageCount": 2,
          "imageSelectionMode": "huggingface_random",
          "randomImageSelection": true,
          "imageFit": "cover"
        },
        {
          "type": "imagepicker",
          "name": "question_1771911693821",
          "title": "Theo bạn, nơi nào trông chán, buồn hơn?",
          "isRequired": true,
          "imageCount": 2,
          "imageSelectionMode": "huggingface_random",
          "randomImageSelection": true,
          "imageFit": "cover"
        }
      ]
    },
    {
      "name": "page_1771911760710",
      "title": "Chán, ít hoạt động",
      "description": "",
      "elements": [
        {
          "type": "imagepicker",
          "name": "question_1771911829718",
          "title": "Theo bạn, nơi nào trông chán, ít hoạt động hơn?",
          "isRequired": true,
          "imageCount": 2,
          "imageSelectionMode": "huggingface_random",
          "randomImageSelection": true,
          "imageFit": "cover"
        },
        {
          "type": "imagepicker",
          "name": "question_1771911829719",
          "title": "Theo bạn, nơi nào trông chán, ít hoạt động hơn?",
          "isRequired": true,
          "imageCount": 2,
          "imageSelectionMode": "huggingface_random",
          "randomImageSelection": true,
          "imageFit": "cover"
        },
        {
          "type": "imagepicker",
          "name": "question_1771911829720",
          "title": "Theo bạn, nơi nào trông chán, ít hoạt động hơn?",
          "isRequired": true,
          "imageCount": 2,
          "imageSelectionMode": "huggingface_random",
          "randomImageSelection": true,
          "imageFit": "cover"
        },
        {
          "type": "imagepicker",
          "name": "question_1771911829721",
          "title": "Theo bạn, nơi nào trông chán, ít hoạt động hơn?",
          "isRequired": true,
          "imageCount": 2,
          "imageSelectionMode": "huggingface_random",
          "randomImageSelection": true,
          "imageFit": "cover"
        },
        {
          "type": "imagepicker",
          "name": "question_1771911829722",
          "title": "Theo bạn, nơi nào trông chán, ít hoạt động hơn?",
          "isRequired": true,
          "imageCount": 2,
          "imageSelectionMode": "huggingface_random",
          "randomImageSelection": true,
          "imageFit": "cover"
        },
        {
          "type": "imagepicker",
          "name": "question_1771911829723",
          "title": "Theo bạn, nơi nào trông chán, ít hoạt động hơn?",
          "isRequired": true,
          "imageCount": 2,
          "imageSelectionMode": "huggingface_random",
          "randomImageSelection": true,
          "imageFit": "cover"
        }
      ]
    }
  ],
  "theme": {
    "primaryColor": "#ce2027",
    "backgroundColor": "#f2f2f2",
    "headerBackground": "#ffe0b2",
    "secondaryText": "#ce2027",
    "disabledText": "#ce2027"
  },
  "preloadedImages": [
    {
      "url": "https://huggingface.co/datasets/Zennie0804/TenImageTest/resolve/main/BAN2.png",
      "name": "Zennie0804_TenImageTest_0",
      "metadata": {
        "dataset": "Zennie0804/TenImageTest",
        "path": "BAN2.png",
        "rowIndex": 0,
        "isPermanent": true
      }
    },
    {
      "url": "https://huggingface.co/datasets/Zennie0804/TenImageTest/resolve/main/HG.jpg",
      "name": "Zennie0804_TenImageTest_1",
      "metadata": {
        "dataset": "Zennie0804/TenImageTest",
        "path": "HG.jpg",
        "rowIndex": 1,
        "isPermanent": true
      }
    },
    {
      "url": "https://huggingface.co/datasets/Zennie0804/TenImageTest/resolve/main/HG3.jpg",
      "name": "Zennie0804_TenImageTest_2",
      "metadata": {
        "dataset": "Zennie0804/TenImageTest",
        "path": "HG3.jpg",
        "rowIndex": 2,
        "isPermanent": true
      }
    },
    {
      "url": "https://huggingface.co/datasets/Zennie0804/TenImageTest/resolve/main/KN3.jpg",
      "name": "Zennie0804_TenImageTest_3",
      "metadata": {
        "dataset": "Zennie0804/TenImageTest",
        "path": "KN3.jpg",
        "rowIndex": 3,
        "isPermanent": true
      }
    },
    {
      "url": "https://huggingface.co/datasets/Zennie0804/TenImageTest/resolve/main/KN4.JPG",
      "name": "Zennie0804_TenImageTest_4",
      "metadata": {
        "dataset": "Zennie0804/TenImageTest",
        "path": "KN4.JPG",
        "rowIndex": 4,
        "isPermanent": true
      }
    },
    {
      "url": "https://huggingface.co/datasets/Zennie0804/TenImageTest/resolve/main/LMT.JPG",
      "name": "Zennie0804_TenImageTest_5",
      "metadata": {
        "dataset": "Zennie0804/TenImageTest",
        "path": "LMT.JPG",
        "rowIndex": 5,
        "isPermanent": true
      }
    },
    {
      "url": "https://huggingface.co/datasets/Zennie0804/TenImageTest/resolve/main/LMT2.JPG",
      "name": "Zennie0804_TenImageTest_6",
      "metadata": {
        "dataset": "Zennie0804/TenImageTest",
        "path": "LMT2.JPG",
        "rowIndex": 6,
        "isPermanent": true
      }
    },
    {
      "url": "https://huggingface.co/datasets/Zennie0804/TenImageTest/resolve/main/LMT3.JPG",
      "name": "Zennie0804_TenImageTest_7",
      "metadata": {
        "dataset": "Zennie0804/TenImageTest",
        "path": "LMT3.JPG",
        "rowIndex": 7,
        "isPermanent": true
      }
    },
    {
      "url": "https://huggingface.co/datasets/Zennie0804/TenImageTest/resolve/main/LMT4.JPG",
      "name": "Zennie0804_TenImageTest_8",
      "metadata": {
        "dataset": "Zennie0804/TenImageTest",
        "path": "LMT4.JPG",
        "rowIndex": 8,
        "isPermanent": true
      }
    },
    {
      "url": "https://huggingface.co/datasets/Zennie0804/TenImageTest/resolve/main/LMT5.JPG",
      "name": "Zennie0804_TenImageTest_9",
      "metadata": {
        "dataset": "Zennie0804/TenImageTest",
        "path": "LMT5.JPG",
        "rowIndex": 9,
        "isPermanent": true
      }
    },
    {
      "url": "https://huggingface.co/datasets/Zennie0804/TenImageTest/resolve/main/MT.JPG",
      "name": "Zennie0804_TenImageTest_10",
      "metadata": {
        "dataset": "Zennie0804/TenImageTest",
        "path": "MT.JPG",
        "rowIndex": 10,
        "isPermanent": true
      }
    },
    {
      "url": "https://huggingface.co/datasets/Zennie0804/TenImageTest/resolve/main/NLCQ1.png",
      "name": "Zennie0804_TenImageTest_11",
      "metadata": {
        "dataset": "Zennie0804/TenImageTest",
        "path": "NLCQ1.png",
        "rowIndex": 11,
        "isPermanent": true
      }
    },
    {
      "url": "https://huggingface.co/datasets/Zennie0804/TenImageTest/resolve/main/NLCQ2.png",
      "name": "Zennie0804_TenImageTest_12",
      "metadata": {
        "dataset": "Zennie0804/TenImageTest",
        "path": "NLCQ2.png",
        "rowIndex": 12,
        "isPermanent": true
      }
    },
    {
      "url": "https://huggingface.co/datasets/Zennie0804/TenImageTest/resolve/main/NLCQ3.png",
      "name": "Zennie0804_TenImageTest_13",
      "metadata": {
        "dataset": "Zennie0804/TenImageTest",
        "path": "NLCQ3.png",
        "rowIndex": 13,
        "isPermanent": true
      }
    },
    {
      "url": "https://huggingface.co/datasets/Zennie0804/TenImageTest/resolve/main/NLCQ4.jpg",
      "name": "Zennie0804_TenImageTest_14",
      "metadata": {
        "dataset": "Zennie0804/TenImageTest",
        "path": "NLCQ4.jpg",
        "rowIndex": 14,
        "isPermanent": true
      }
    },
    {
      "url": "https://huggingface.co/datasets/Zennie0804/TenImageTest/resolve/main/NLCQ5.png",
      "name": "Zennie0804_TenImageTest_15",
      "metadata": {
        "dataset": "Zennie0804/TenImageTest",
        "path": "NLCQ5.png",
        "rowIndex": 15,
        "isPermanent": true
      }
    },
    {
      "url": "https://huggingface.co/datasets/Zennie0804/TenImageTest/resolve/main/NTN.jpg",
      "name": "Zennie0804_TenImageTest_16",
      "metadata": {
        "dataset": "Zennie0804/TenImageTest",
        "path": "NTN.jpg",
        "rowIndex": 16,
        "isPermanent": true
      }
    },
    {
      "url": "https://huggingface.co/datasets/Zennie0804/TenImageTest/resolve/main/NTN2.jpg",
      "name": "Zennie0804_TenImageTest_17",
      "metadata": {
        "dataset": "Zennie0804/TenImageTest",
        "path": "NTN2.jpg",
        "rowIndex": 17,
        "isPermanent": true
      }
    },
    {
      "url": "https://huggingface.co/datasets/Zennie0804/TenImageTest/resolve/main/PDA1.jpg",
      "name": "Zennie0804_TenImageTest_18",
      "metadata": {
        "dataset": "Zennie0804/TenImageTest",
        "path": "PDA1.jpg",
        "rowIndex": 18,
        "isPermanent": true
      }
    },
    {
      "url": "https://huggingface.co/datasets/Zennie0804/TenImageTest/resolve/main/PDA2.jpg",
      "name": "Zennie0804_TenImageTest_19",
      "metadata": {
        "dataset": "Zennie0804/TenImageTest",
        "path": "PDA2.jpg",
        "rowIndex": 19,
        "isPermanent": true
      }
    },
    {
      "url": "https://huggingface.co/datasets/Zennie0804/TenImageTest/resolve/main/PDA3.jpg",
      "name": "Zennie0804_TenImageTest_20",
      "metadata": {
        "dataset": "Zennie0804/TenImageTest",
        "path": "PDA3.jpg",
        "rowIndex": 20,
        "isPermanent": true
      }
    },
    {
      "url": "https://huggingface.co/datasets/Zennie0804/TenImageTest/resolve/main/PTMQh.JPG",
      "name": "Zennie0804_TenImageTest_21",
      "metadata": {
        "dataset": "Zennie0804/TenImageTest",
        "path": "PTMQh.JPG",
        "rowIndex": 21,
        "isPermanent": true
      }
    },
    {
      "url": "https://huggingface.co/datasets/Zennie0804/TenImageTest/resolve/main/PTMQH2.JPG",
      "name": "Zennie0804_TenImageTest_22",
      "metadata": {
        "dataset": "Zennie0804/TenImageTest",
        "path": "PTMQH2.JPG",
        "rowIndex": 22,
        "isPermanent": true
      }
    },
    {
      "url": "https://huggingface.co/datasets/Zennie0804/TenImageTest/resolve/main/PTMQH3.JPG",
      "name": "Zennie0804_TenImageTest_23",
      "metadata": {
        "dataset": "Zennie0804/TenImageTest",
        "path": "PTMQH3.JPG",
        "rowIndex": 23,
        "isPermanent": true
      }
    },
    {
      "url": "https://huggingface.co/datasets/Zennie0804/TenImageTest/resolve/main/TD1.jpg",
      "name": "Zennie0804_TenImageTest_24",
      "metadata": {
        "dataset": "Zennie0804/TenImageTest",
        "path": "TD1.jpg",
        "rowIndex": 24,
        "isPermanent": true
      }
    },
    {
      "url": "https://huggingface.co/datasets/Zennie0804/TenImageTest/resolve/main/TD3.jpg",
      "name": "Zennie0804_TenImageTest_25",
      "metadata": {
        "dataset": "Zennie0804/TenImageTest",
        "path": "TD3.jpg",
        "rowIndex": 25,
        "isPermanent": true
      }
    },
    {
      "url": "https://huggingface.co/datasets/Zennie0804/TenImageTest/resolve/main/Th.jpg",
      "name": "Zennie0804_TenImageTest_26",
      "metadata": {
        "dataset": "Zennie0804/TenImageTest",
        "path": "Th.jpg",
        "rowIndex": 26,
        "isPermanent": true
      }
    },
    {
      "url": "https://huggingface.co/datasets/Zennie0804/TenImageTest/resolve/main/TH2.jpg",
      "name": "Zennie0804_TenImageTest_27",
      "metadata": {
        "dataset": "Zennie0804/TenImageTest",
        "path": "TH2.jpg",
        "rowIndex": 27,
        "isPermanent": true
      }
    },
    {
      "url": "https://huggingface.co/datasets/Zennie0804/TenImageTest/resolve/main/TH3.jpg",
      "name": "Zennie0804_TenImageTest_28",
      "metadata": {
        "dataset": "Zennie0804/TenImageTest",
        "path": "TH3.jpg",
        "rowIndex": 28,
        "isPermanent": true
      }
    },
    {
      "url": "https://huggingface.co/datasets/Zennie0804/TenImageTest/resolve/main/TN2C.jpg",
      "name": "Zennie0804_TenImageTest_29",
      "metadata": {
        "dataset": "Zennie0804/TenImageTest",
        "path": "TN2C.jpg",
        "rowIndex": 29,
        "isPermanent": true
      }
    }
  ],
  "imagePreloadTimestamp": "2026-02-25T02:53:46.079Z"
};

export const getPreloadedImages = () => {
  return deploymentConfig.preloadedImages || [];
};

export const isImagePreloaded = () => {
  return deploymentConfig.preloadedImages && deploymentConfig.preloadedImages.length > 0;
};
