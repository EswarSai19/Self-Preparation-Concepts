// return new Promise(resolve => {

    // Your logic goes here
    let collectionArr = ["Hybrid Collection","My Power Matt Collection","Wellness Collection","Comfort Collection","Foamtastic Collection","Sleepables","Baby Mattress","Go Back"];
    let hindiCollectionArr = ["हाइब्रिड संग्रह","मेरा पावर मैट संग्रह","अच्छा संग्रह","आरामदायक संग्रह","फ़ोमटैस्टिक संग्रह","सोने योग्य","बच्चे का गद्दा","वापस जाओ"];
    // let recentOptionSelected = data.variables.retailor_data_obj.records[0].recent_mattress_list;
    // let langSelected = data.user.language;
  
    recentOptionSelected = "-///My Power Matt Collection + Centuary SPIRIT - Reversible Bonnell Spring Mattress + 99 (units)".split("///");
    // console.log(recentOptionSelected);
    let optionsArr = [];
    if(recentOptionSelected.length>1){
        let collectionNames = recentOptionSelected.map(item => {
        const parts = item.split(' + ');
        return parts[0].trim(); 
        });
        let uniqueCollectionNames = [...new Set(collectionNames)].filter(name => name !== '');
        let uniqueArr = collectionArr.filter(item => !uniqueCollectionNames.includes(item));
        // let uniqueArr = [];
        // let hindiUniqueArr =[];
        for(let i=0; i<collectionArr.length; i++){
            for(let j=0; j<uniqueCollectionNames.length; j++){
            if(collectionArr[i] !== uniqueCollectionNames[j]){
                uniqueArr.push(collectionArr[i]);
                hindiUniqueArr.push(hindiCollectionArr[i])
                break;
            }
            }
        }
        
        console.log(uniqueArr);


        for(let i=0; i<uniqueArr.length; i++){
            optionsArr.push({
                "title": hindiUniqueArr[i],
                "text": uniqueArr[i],
                "description": ""
            });
        }
    }else{
        for(let i=0; i<collectionArr.length; i++){
            optionsArr.push({
                "title": hindiCollectionArr[i],
                "text": collectionArr[i],
            });
        }
    }
    
    let obj = {
        "title": "Please select the mattress type. 😊🛏️",
        "options": optionsArr
        // "footer": "Please follow Covid Guideline while consulting."
    };
    // resolve(obj);
// }); 

                     