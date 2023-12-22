let collectionArr = [
  "Hybrid Collection",
  "My Power Matt Collection",
  "Wellness Collection",
  "Comfort Collection",
  "Foamtastic Collection",
  "Sleepables",
  "Baby Mattress", "Go Back"
];

let recentOptionSelected = "-///Comfort Collection + King Coir - Coir Mattress + 23///Sleepables + Centuary Mattresses Sleepables Multi Layered Pocket Spring Mattress + 33";
recentOptionSelected = recentOptionSelected.split("///")
console.log(recentOptionSelected)

let collectionNames = recentOptionSelected.map(item => {
  const parts = item.split('+');
  return parts[0].trim(); 
});

let uniqueCollectionNames = [...new Set(collectionNames)].filter(name => name !== '-');

let uniqueArr = collectionArr.filter(item => !uniqueCollectionNames.includes(item));
let optionsArr = []
console.log(uniqueArr);
for(let i=0; i<uniqueArr.length; i++){
  optionsArr.push({
    "title": uniqueArr[i],
    "text": uniqueArr[i],
    "description": ""
  })
}

let obj = {
    "title": "Please select the mattress type.",
    "optionText": "Mattress Collections",
    "options": [
      {
        "section": "June 5, 2021",
        "options": optionsArr
      },
      
    ],
    // "footer": "Please follow Covid Guideline while consulting."
  }