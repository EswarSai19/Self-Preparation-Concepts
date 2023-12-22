// let charges_list_data = data.variables.additional_charges_data_obj.records
let charges_list_data = [
    {
      "sender_number": "918074212400",
      "enroute_to_pickup": "Enrouted + Coordinates of driver is [ Lat : 17.5101708, Lon : 78.4057388 ]",
      "id": 336,
      "Additional_charges_details": "+Parking Charges+Parking Charges+Waiting Charges"
    }
  ]
        // if(charges_list_data[0].Additional_charges_details.length==0){
        //     resolve({status:"no charges left"})
        // }
        let charges_list = charges_list_data[0].Additional_charges_details.split("+").sort()
        let options = []
        for(let i=1; i<charges_list.length; i++){
            
            options.push({
                "title": charges_list[i].trim(),
                "text": charges_list[i].trim(),
                "description": ""
            })
        }
console.log(options)
        let obj =  {
                        "title": `Upload supporting documents if any before XX : XX am/pm\n\n❗Supporting documents (if applicable) mandatory to receive payments for this trip`,
                        "optionText": "List of charges",
                        "options": [
                            {
                            "section": "June 5, 2021",
                            "options": options
                            },
                            
                        ],
                        //   "footer": "Please follow Covid Guideline while consulting."
                    }