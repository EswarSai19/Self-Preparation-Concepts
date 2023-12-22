let linksData = [
  {
    "youtube_link": "https://youtu.be/Qq6JCHHyvcw",
    "app_name": "Logistics",
    "id": 418
  },
  {
    "youtube_link": "https://youtu.be/Qq6JCHHyvcw",
    "app_name": "Pickup Delivery",
    "id": 396
  },
  {
    "youtube_link": "https://youtu.be/EkHI1LX_T_g",
    "app_name": "Dunzo",
    "id": 419
  },
  {
    "youtube_link": "https://youtu.be/EkHI1LX_T_g",
    "app_name": "Gopuff",
    "id": 401
  },
  {
    "youtube_link": "https://youtu.be/0K-C9bh-IsI",
    "app_name": "Shipt",
    "id": 420
  },
  {
    "youtube_link": "https://youtu.be/0K-C9bh-IsI",
    "app_name": "Grocery",
    "id": 399
  },
  {
    "youtube_link": "https://youtu.be/Sjh_WwGXyrk",
    "app_name": "Tinder",
    "id": 395
  },
  {
    "youtube_link": "https://youtu.be/Sjh_WwGXyrk",
    "app_name": "Dating",
    "id": 421
  },
  {
    "youtube_link": "https://youtu.be/bSqOZAV_Q7M",
    "app_name": "Uber",
    "id": 422
  },
  {
    "youtube_link": "https://youtu.be/bSqOZAV_Q7M",
    "app_name": "Taxi or Transportation",
    "id": 405
  },
  {
    "youtube_link": "https://youtu.be/tZFw6WJmGCQ",
    "app_name": "Grubhub",
    "id": 423
  },
  {
    "youtube_link": "https://youtu.be/tZFw6WJmGCQ",
    "app_name": "Doordash",
    "id": 411
  },
  {
    "youtube_link": "https://youtu.be/tZFw6WJmGCQ",
    "app_name": "Yummy",
    "id": 425
  },
  {
    "youtube_link": "https://youtu.be/tZFw6WJmGCQ",
    "app_name": "Food Delivery",
    "id": 394
  },
  {
    "youtube_link": "https://youtu.be/tZFw6WJmGCQ",
    "app_name": "Zomato",
    "id": 426
  },
  {
    "youtube_link": "https://youtu.be/tZFw6WJmGCQ",
    "app_name": "Swiggy",
    "id": 424
  },
  {
    "youtube_link": "https://youtu.be/UYTkkl0qZk4",
    "app_name": "Tiktok",
    "id": 400
  },
  {
    "youtube_link": "https://youtu.be/cGD-cUnS3o8",
    "app_name": "Postmates",
    "id": 432
  },
  {
    "youtube_link": "https://youtu.be/cGD-cUnS3o8",
    "app_name": "Grab",
    "id": 433
  },
  {
    "youtube_link": "https://youtu.be/eeCHGnp5J98",
    "app_name": "Gojek",
    "id": 434
  },
  {
    "youtube_link": "https://youtu.be/ZTxxCxGLyjE",
    "app_name": "E-commerce or Ebay",
    "id": 435
  },
  {
    "youtube_link": "https://youtu.be/CbNpjyCbJFk",
    "app_name": "Practo",
    "id": 436
  },
  {
    "youtube_link": "https://youtu.be/aXkm5Qd1Fxw",
    "app_name": "Instacart",
    "id": 437
  },
  {
    "youtube_link": "https://youtu.be/K-BNf00egQ0",
    "app_name": "Super",
    "id": 392
  },
  {
    "youtube_link": "https://youtu.be/5MnRERb31iY",
    "app_name": "Multi Service",
    "id": 393
  },
  {
    "youtube_link": "https://youtu.be/fXbeH4r73go",
    "app_name": "Beauty Salon",
    "id": 397
  },
  {
    "youtube_link": "https://youtu.be/0A0HHc8lcjU",
    "app_name": "Delivery Management Software",
    "id": 398
  },
  {
    "youtube_link": "https://youtu.be/AjcoHAg0ffQ",
    "app_name": "Restaurant Management",
    "id": 402
  },
  {
    "youtube_link": "https://youtu.be/A7teR0FZi4U",
    "app_name": "RoyoFood",
    "id": 403
  },
  {
    "youtube_link": "https://youtu.be/khUchf3ShGc",
    "app_name": "Inventory Management System",
    "id": 404
  },
  {
    "youtube_link": "https://youtu.be/6Hql3ijmzKU",
    "app_name": "Construction Management",
    "id": 406
  },
  {
    "youtube_link": "https://youtu.be/bSqOZAV_Q7M",
    "app_name": "Rideshare",
    "id": 825
  },
  {
    "youtube_link": "https://youtu.be/bSqOZAV_Q7M",
    "app_name": "Ride share",
    "id": 852
  }
]
  // let appData = data.variables.links_data_obj.records;
  // let inputString = data.message || data.variables.recentQuery;
  let inputString = "I want rideshare app demo"
  let appData = linksData;
  function calculateTextSimilarity(text1, text2) {
    const words1 = text1.toLowerCase().split(' ');
    const words2 = text2.toLowerCase().split(' ');

    let commonWords = 0;
    for (const word1 of words1) {
        for (const word2 of words2) {
        if (word1 === word2) {
            commonWords++;
        }
        }
    }

    const similarity = commonWords / Math.sqrt(words1.length * words2.length);
    return similarity;
    }

    // Function to find the closest app name in the array
    function findClosestAppName(inputString, appData) {
    let closestAppName = null;
    let maxSimilarity = 0;

    for (const app of appData) {
        const similarity = calculateTextSimilarity(inputString, app.app_name);
        
        if (similarity > maxSimilarity) {
        maxSimilarity = similarity;
        closestAppName = app.app_name;
        }
    }

    return closestAppName;
    }

    // Find the closest app name
    const closestAppName = findClosestAppName(inputString, appData);

    // Find the corresponding YouTube link
    let matchingYouTubeLink = null;

    if (closestAppName) {
    const matchingApp = appData.find(item => item.app_name === closestAppName);
    matchingYouTubeLink = matchingApp.youtube_link;
    }

    // Final output
    if (matchingYouTubeLink) {
    // resolve(`You ?can check out the demo of the ${closestAppName} App on YouTube. Just follow this link ${matchingYouTubeLink}`)
    console.log(`The closest app name in the array to "${inputString}" is "${closestAppName}"`);
    console.log(`YouTube Link: ${matchingYouTubeLink}`);
    } else {
    console.log(`No close match found for "${inputString}" in the array.`);
    }