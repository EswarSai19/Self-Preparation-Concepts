let filterData = [
    {
      "thickness": "4-5 inches",
      "age_group": "> 60",
      "firmness": "Soft",
      "id": 44078,
      "mattress_suggested": "Softopedic 2.0 and Vibex",
      "sleeping_issue": "Partner Distrubance",
      "mattress_for": "Couple",
      "sleeping_position": "Back"
    }
  ]
let product_string = filterData[0].mattress_suggested
let actualData = [
    {
        "feature_4": "Comes with CertiPUR - US standards",
        "feature_3": "Resilient foam ensures better air permeability of the mattress",
        "image_url": "https://www.centuaryindia.com/wp-content/uploads/2019/11/softopedic-100.jpg",
        "feature_2": "Uni foam mattress that offers promising softness",
        "generic_name": "Foam Mattress",
        "feature_1": "Mattress roll packed for convenience to carry",
        "price_range": "Rs.8,941-23,238",
        "ending_price": 23238,
        "product_title": "Centuary Softopedic 2.0 - Best Foam Mattress",
        "starting_price": 8941,
        "product_id": "SPD05",
        "id": 179,
        "category": "Foamtastic Collection"
    },
    {
        "feature_4": "Latex foam for luxurious comfort and bounce",
        "feature_3": "Copper beads ensures antimicrobial benefits to the body",
        "image_url": "https://www.centuaryindia.com/wp-content/uploads/2022/11/Centuary-Enigma-%E2%80%93-Contour-Latex-Foam-Mattress-4.png",
        "feature_2": "Copper gel memory foam ensures better temperature control",
        "generic_name": "Foam Mattress",
        "feature_1": "Contour foam layer provides incredible support and airflow",
        "price_range": "Rs.24,398-60,306",
        "ending_price": 60306,
        "product_title": "Centuary Enigma - Contour Latex Foam Mattress",
        "starting_price": 24398,
        "product_id": "ENG08",
        "id": 161,
        "category": "Hybrid Collection"
    },
    {
        "feature_4": "Memory foam conforms to your body to relax well",
        "feature_3": "Copper gel protects over heating and from microbes",
        "image_url": "https://www.centuaryindia.com/wp-content/uploads/2022/09/Vibex-100-3.jpg",
        "feature_2": "Ortho foam ensures firmness and support to the body",
        "generic_name": "Foam Mattress",
        "feature_1": "Ensures the best body spine support and sleep posture",
        "price_range": "Rs.6,710-16,538",
        "ending_price": 16538,
        "product_title": "Vibex- High Resilience Foam Mattress",
        "starting_price": 6710,
        "product_id": "VBX05",
        "id": 178,
        "category": "Foamtastic Collection"
    },
    {
        "feature_4": "Profiled foam layer allows superior airflow",
        "feature_3": "Copper gel foam reduces body heat and relieves pressure points",
        "image_url": "https://www.centuaryindia.com/wp-content/uploads/2022/11/img-4-2.png",
        "feature_2": "Enhanced stability, support and firmness with the rebonded foam",
        "generic_name": "Coir Mattress",
        "feature_1": "Provides the perfect back support",
        "price_range": "Rs.21,554-56,228",
        "ending_price": 56228,
        "product_title": "Natura Latex - Natural Latex & Coir Mattress",
        "starting_price": 21554,
        "product_id": "NTL08",
        "id": 164,
        "category": "Hybrid Collection"
    },
    {
        "feature_4": "",
        "feature_3": "Uses a high GSM viscose knitted fabric for healthy skin",
        "image_url": "https://www.centuaryindia.com/wp-content/uploads/2022/11/img-4-8.png",
        "feature_2": "Enhanced bounciness with bonnell Springs",
        "generic_name": "Pocket Spring Mattress",
        "feature_1": "Contour foam for better breathability and stability",
        "price_range": "Rs.21,579-61,383",
        "ending_price": 61383,
        "product_title": "Centuary Hexa - Pocketed Spring Mattress",
        "starting_price": 21579,
        "product_id": "HEX08",
        "id": 166,
        "category": "Power Matt Collection"
    },
    {
        "feature_4": "Memory foam helps the mattress contours to your body shape",
        "feature_3": "Enjoy the sleep without the feeling of sinking into the mattress",
        "image_url": "https://www.centuaryindia.com/wp-content/uploads/2022/11/img-1-6.png",
        "feature_2": "Contour foam provides relief to the body touch points",
        "generic_name": "Bonnell Spring Mattress",
        "feature_1": "Pocketed spring gives weightless comfort to the body",
        "price_range": "Rs.9,413-25,930",
        "ending_price": 25930,
        "product_title": "Centuary SPIRIT - Reversible Bonnell Spring Mattress",
        "starting_price": 9413,
        "product_id": "SPI06",
        "id": 168,
        "category": "Power Matt Collection"
    },
    {
        "feature_4": "Reversible mattress with enhanced durability",
        "feature_3": "Unmatched comfort and an uplifting sleeping experience",
        "image_url": "https://www.centuaryindia.com/wp-content/uploads/2022/11/endurance-pro-1.jpg",
        "feature_2": "Zero partner disturbance with pocketed springs",
        "generic_name": "Pocket Spring Mattress",
        "feature_1": "Reversible mattress made with advanced spring technology",
        "price_range": "Rs.15,634-38,022",
        "ending_price": 38022,
        "product_title": "Centuary Endurance Pro - Pocketed Spring Mattress",
        "starting_price": 15634,
        "product_id": "EDP08",
        "id": 170,
        "category": "Power Matt Collection"
    },
    {
        "feature_4": "Air mesh border adds an unmatched style quotient",
        "feature_3": "Double quilted top offers softness and comfort to the body",
        "image_url": "https://www.centuaryindia.com/wp-content/uploads/2022/11/1500x1000_Dr.-Sleep-copy.jpg",
        "feature_2": "Rebonded foam ensures better support to the body",
        "generic_name": "Coir  Mattress",
        "feature_1": "Experiencial support to the spine with Ortho foam and coir core",
        "price_range": "Rs.7,641-21,338",
        "ending_price": 21338,
        "product_title": "Centuary Dr. Sleep+ - Orthopedic Coir Mattress",
        "starting_price": 7641,
        "product_id": "DRS05",
        "id": 172,
        "category": "Wellness Collection"
    },
    {
        "feature_4": "Infused Copper beads helps reducing the body heat",
        "feature_3": "Memory foam relieves body pressure and adapts to the shape of the sleeper",
        "image_url": "https://www.centuaryindia.com/wp-content/uploads/2021/04/Comfort-Collection-King-Bond-5.png",
        "feature_2": "Rubberized coir and rebonded foam combo offers the right firmness",
        "generic_name": "Foam Mattress",
        "feature_1": "Mattress choice for the ortho patient",
        "price_range": "Rs.4,861-13,071",
        "ending_price": 13071,
        "product_title": "King Bond - Foam Mattress",
        "starting_price": 4861,
        "product_id": "KBD04",
        "id": 174,
        "category": "Comfort Collection"
    },
    {
        "feature_4": "Pocket friendly mattress of choice",
        "feature_3": "Double quilted antimicrobial foam sheet with an attractive fabric",
        "image_url": "https://www.centuaryindia.com/wp-content/uploads/2022/11/Posture-Pro-100-.jpg",
        "feature_2": "It's a sandwitch mattess of Coir and Hard foam",
        "generic_name": "Foam Mattress",
        "feature_1": "An unbeatable combination of stability, firmness and durability",
        "price_range": "Rs.11,513-31,684",
        "ending_price": 31684,
        "product_title": "Posture Pro-Ortho Mattress",
        "starting_price": 11513,
        "product_id": "PSP06",
        "id": 177,
        "category": "Foamtastic Collection"
    },
    {
        "feature_4": "Pocket friendly mattress of the choice",
        "feature_3": "Unbeatable durability from the core material",
        "image_url": "https://www.centuaryindia.com/wp-content/uploads/2022/11/Comfort-Collection-King-Coir-6.png",
        "feature_2": "Offers extra firmness your body needs",
        "generic_name": "Coir Mattress",
        "feature_1": "Rebonded foam mattress with top foam quilting",
        "price_range": "Rs.6,232-16,757",
        "ending_price": 16757,
        "product_title": "King Coir - Coir Mattress",
        "starting_price": 6232,
        "product_id": "KNG05",
        "id": 175,
        "category": "Comfort Collection"
    },
    {
        "feature_4": "Innovative technology and rubberized coir delivers the perfect night's sleep",
        "feature_3": "No body pain with the firm nature of this mattress",
        "image_url": "https://www.centuaryindia.com/wp-content/uploads/2022/11/Ortho-active-mood-shot-_-Sania-copy.jpg",
        "feature_2": "Provides perfect support to your back and body",
        "generic_name": "Coir  Mattress",
        "feature_1": "Doctors recommended mattress",
        "price_range": "Rs.12,609-33,635",
        "ending_price": 33635,
        "product_title": "Centuary Ortho Active - Best Orthopaedic Mattress",
        "starting_price": 12609,
        "product_id": "OAT06",
        "id": 173,
        "category": "Wellness Collection"
    },
    {
        "feature_4": "Uniquely styled Damask fabric adds plush",
        "feature_3": "High density flexible foam for better edge support",
        "image_url": "https://www.centuaryindia.com/wp-content/uploads/2022/11/03-.jpg",
        "feature_2": "Feel the rebounce each time you jump",
        "generic_name": "Coir  Mattress",
        "feature_1": "Zero partner disturbance with pocketed springs",
        "price_range": "Rs.9,179-24,486",
        "ending_price": 24486,
        "product_title": "Spine Support - Rubberized Coir Tight Top Mattress",
        "starting_price": 9179,
        "product_id": "SPS06",
        "id": 171,
        "category": "Wellness Collection"
    },
    {
        "feature_4": "",
        "feature_3": "Soft knitted fabric for restless sleep",
        "image_url": "https://www.centuaryindia.com/wp-content/uploads/2022/11/img-4-5.png",
        "feature_2": "Good body support with bonnel spring core",
        "generic_name": "Pocket Spring Mattress",
        "feature_1": "Reversible mattress featuring soft on one side and firm on the other",
        "price_range": "Rs.12,060-33,517",
        "ending_price": 33517,
        "product_title": "Centuary UPLIFT - Zero Disturbance Pocketed Spring",
        "starting_price": 12060,
        "product_id": "UPL06",
        "id": 169,
        "category": "Power Matt Collection"
    },
    {
        "feature_4": "Latex foam provides a good comfort and feel",
        "feature_3": "Memory foam contours to your body shape for a better sleep",
        "image_url": "https://www.centuaryindia.com/wp-content/uploads/2022/11/img-6-1.png",
        "feature_2": "Long lasting strength with pocketed springs",
        "generic_name": "Pocket Spring Mattress",
        "feature_1": "Hybrid technology to support the whole body",
        "price_range": "Rs.18,814-52,442",
        "ending_price": 52442,
        "product_title": "Centuary NEOFIT - Pocketed Spring Mattress",
        "starting_price": 18814,
        "product_id": "NEO08",
        "id": 167,
        "category": "Power Matt Collection"
    },
    {
        "feature_4": "Rebonded foam provides additional support to the body",
        "feature_3": "Enhanced comfort with the power of copper gel",
        "image_url": "https://www.centuaryindia.com/wp-content/uploads/2022/11/img-5-4.png",
        "feature_2": "Natural Latex gives great comfort and luxurious feel",
        "generic_name": "Bonnell Spring Mattress",
        "feature_1": "It's a natural mattress made from rubberized coir, latex and organic cotton fabric",
        "price_range": "Rs.16,510-48,934",
        "ending_price": 48934,
        "product_title": "Centuary DYNAMO - Bonnell Spring Mattress",
        "starting_price": 16510,
        "product_id": "DYN08",
        "id": 165,
        "category": "Power Matt Collection"
    },
    {
        "feature_4": "Latex foam provides plush comfort to the body",
        "feature_3": "Pocketed spring ensures uniform body weight distribution",
        "image_url": "https://www.centuaryindia.com/wp-content/uploads/2022/11/img-4-1.png",
        "feature_2": "Superior comfort and support with micro-springs",
        "generic_name": "Foam Mattress",
        "feature_1": "It's a combination of pocketed spring with latex foam and memory foam",
        "price_range": "Rs.18417-45,519",
        "ending_price": 45519,
        "product_title": "Centuary Pixel - Copper Gel Memory Foam Mattress",
        "starting_price": 18417,
        "product_id": "PXL07",
        "id": 163,
        "category": "Hybrid Collection"
    },
    {
        "feature_4": "High end knitted fabric for softy feel",
        "feature_3": "Ensure greater air flow through the mattress",
        "image_url": "https://www.centuaryindia.com/wp-content/uploads/2022/11/Tuff2.0-100-2.jpg",
        "feature_2": "Ensures comfort that your body demands",
        "generic_name": "Foam Mattress",
        "feature_1": "Engineered with a core of high density Contour foam",
        "price_range": "Rs.7,152-18,590",
        "ending_price": 18590,
        "product_title": "Tuff 2.0 - Rebonded Foam Mattress",
        "starting_price": 7152,
        "product_id": "TUF45",
        "id": 180,
        "category": "Foamtastic Collection"
    },
    {
        "feature_4": "Ideal comfort and resilience that your body desires",
        "feature_3": "Advanced spring technology with active edge support",
        "image_url": "https://www.centuaryindia.com/wp-content/uploads/2022/11/Hybrid-memory-foam-pocket-spring1-600x459-1.jpg",
        "feature_2": "Ensures zero motion disturbance with pastner's turn and toss",
        "generic_name": "Pocket Spring Mattress",
        "feature_1": "Especially designed with individual pocket springs assembly",
        "price_range": "Rs.9,857-20,021",
        "ending_price": 20201,
        "product_title": "Centuary Mattresses Sleepables Hybrid Memory Foam Pocket Spring Mattress",
        "starting_price": 9857,
        "product_id": "SLH08",
        "id": 182,
        "category": "Sleepables"
    },
    {
        "feature_4": "Zipper at the Bottom for easy removing and cleaning the mattress",
        "feature_3": "Certified and recommended by NHA for health safety",
        "image_url": "https://www.centuaryindia.com/wp-content/uploads/2023/07/sleepables-reversible-dual-comfort-firm-01-scaled.jpg",
        "feature_2": "Built with inhouse quality foam with Antimicrobial properties",
        "generic_name": "Dual Comfort Reversible Mattress",
        "feature_1": "Reversible & Dual Comfort ( Firm & Soft)",
        "price_range": "4,949-9,679",
        "ending_price": 9679,
        "product_title": "Centuary Mattresses Sleepables Reversible Dual Comfort Firm and Soft High Resilience Foam Mattress",
        "starting_price": 4949,
        "product_id": "SLD05",
        "id": 191,
        "category": "Sleepables"
    },
    {
        "feature_4": "Offers better resilience to your body",
        "feature_3": "Eye catchy quilt pattern",
        "image_url": "https://www.centuaryindia.com/wp-content/uploads/2022/11/Comfort-Collection-Bubble-4.png",
        "feature_2": "Light in weight yet durable",
        "generic_name": "Coir Mattress",
        "feature_1": "Mattress in a combination of coir and foam",
        "price_range": "4,542-12,210",
        "ending_price": 12210,
        "product_title": "Centuary Bubble - Budget Coir Mattress",
        "starting_price": 4542,
        "product_id": "BBL04",
        "id": 176,
        "category": "Comfort Collection"
    },
    {
        "feature_4": "Latex foam provides plush comfort to the body",
        "feature_3": "Pocketed spring ensures uniform body weight distribution",
        "image_url": "https://www.centuaryindia.com/wp-content/uploads/2022/11/img-2-2.png",
        "feature_2": "Superior comfort and support with micro-springs",
        "generic_name": "Spring Mattress",
        "feature_1": "It's a combination of pocketed spring with latex foam and memory foam",
        "price_range": "Rs.49,313-1,13,162",
        "ending_price": 113162,
        "product_title": "Centuary Infinity - Luxury Pocketed Spring Mattress",
        "starting_price": 49313,
        "product_id": "INF10",
        "id": 162,
        "category": "Hybrid Collection"
    },
    {
        "feature_4": "Semi firm mattress for ideal comfort and back support",
        "feature_3": "Contour foam ensures air breathability thorugh the mattress for longer freshness",
        "image_url": "https://www.centuaryindia.com/wp-content/uploads/2021/09/Bonnel-spring.jpg",
        "feature_2": "Intelligent Airflow technology ensures temperature control",
        "generic_name": "Bonnell Spring Mattress",
        "feature_1": "It's a three-layered ortho foam mattress",
        "price_range": "Rs.5,502-11,256",
        "ending_price": 11256,
        "product_title": "Centuary Mattresses Sleepables 6 Inch Bonnell Spring Single Size Mattress with Antimicrobial Foam",
        "starting_price": 5502,
        "product_id": "SLB06",
        "id": 184,
        "category": "Sleepables"
    },
    {
        "feature_4": "Encases with high GSM knitted fabric for a softy touch and feel",
        "feature_3": "Copper gels ensure the protection against microbes",
        "image_url": "https://www.centuaryindia.com/wp-content/uploads/2022/11/Ortho-memory-foam-650x484-1.jpg",
        "feature_2": "Copper Gel Memory Foam ensures thermal regulation",
        "generic_name": "Memory Foam Mattress",
        "feature_1": "Has exceptional support of pocketed springs with memory foam",
        "price_range": "Rs.6,840-13,338",
        "ending_price": 13338,
        "product_title": "Centuary Mattresses Sleepables Orthopedic Memory Foam Back Support Mattress; Medium Firm Comfort",
        "starting_price": 6840,
        "product_id": "SLF06",
        "id": 183,
        "category": "Sleepables"
    },
    {
        "feature_4": "Double side quilted antimicrobial tapestry on top",
        "feature_3": "Greater air flow throught the mattress with profiled HR foam",
        "image_url": "https://www.centuaryindia.com/wp-content/uploads/2022/11/img-1-10.webp",
        "feature_2": "Promising firmness with the rebonded foam core",
        "generic_name": "Pocket Spring Mattress",
        "feature_1": "Excellent choice for the back body support",
        "price_range": "Rs.6,335-12,959",
        "ending_price": 12959,
        "product_title": "Centuary Mattresses Sleepables Multi Layered Pocket Spring Mattress",
        "starting_price": 6335,
        "product_id": "SLP06",
        "id": 181,
        "category": "Sleepables"
    }
    ]
    let closestAppName;
let finalIds = []
if(product_string.includes(" and ")){
    product_string = product_string.split(" and ")
    console.log(product_string)

    for(let i=0; i<product_string.length; i++){
        closestAppName = findClosestAppName(product_string[i], actualData);
        let matchingProductId = "";
    
        if (closestAppName) {
        const matchingApp = actualData.find(item => item.product_title === closestAppName);
        matchingProductId = matchingApp;
        }
    
        // Final output
        if (matchingProductId) {
        console.log(`Product Id: ${matchingProductId}`);
        finalIds.push(matchingProductId)
        }
    }
}else{
    closestAppName = findClosestAppName(product_string, actualData)
    if (closestAppName) {
        const matchingApp = actualData.find(item => item.product_title === closestAppName);
        matchingProductId = matchingApp;
        }
    if(matchingProductId) {
        console.log(`Product Id: ${matchingProductId}`);
        finalIds.push(matchingProductId)
        }
}
console.log("Final Id",finalIds)
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
function findClosestAppName(inputString, actualData) {
  let closestAppName = null;
  let maxSimilarity = 0;

  for (const prod of actualData) {
    const similarity = calculateTextSimilarity(inputString, prod.product_title);
    
    if (similarity > maxSimilarity) {
      maxSimilarity = similarity;
      closestAppName = prod.product_title;
    }
  }

  return closestAppName;
}




