// Given input string
const inputString = "salon and beauty app";

// Sample array of objects containing app names and YouTube links
const appData = [
  { app_name: "food", youtube_link: "https://youtube.com/foodapp" },
  { app_name: "restaurant", youtube_link: "https://youtube.com/restaurantapp" },
  { app_name: "grocery", youtube_link: "https://youtube.com/groceryapp" }
  // Add more app data objects as needed
];

// Function to calculate text similarity between two strings
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
  console.log(`The closest app name in the array to "${inputString}" is "${closestAppName}"`);
  console.log(`YouTube Link: ${matchingYouTubeLink}`);
} else {
  console.log(`No close match found for "${inputString}" in the array.`);
}
