// return new Promise(resolve => {
    // Your logic goes here
    let city_data = [
        {
          "id": 5433,
          "category": "BigDeal",
          "url": "https://woermannbrock.com/yellow/bigdeal/BigDealMonteCristo.pdf"
        },
        {
          "id": 5435,
          "category": "BigDeal",
          "url": "https://woermannbrock.com/yellow/bigdeal/BigDealWalvisBay.pdf"
        },
        {
          "id": 5434,
          "category": "BigDeal",
          "url": "https://woermannbrock.com/yellow/bigdeal/BigDealOkatanaOndangwa.pdf"
        }
      ]
    let obj = {};
        let count =  0;
        for(let i=count; i<city_data.length; i++){
            let file_name =city_data[i].category
            let file_url =city_data[i].url

            obj = 
                {
                    "file": {
                        "name": file_name,
                        "url": file_url,
                        "urlEncoded": 'true/false'
                    }
                    
                }
                count++;
                break;
        }
        console.log(obj)
        // resolve({obj,count});
// });