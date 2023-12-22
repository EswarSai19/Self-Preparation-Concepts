function extractUTMParameters(url) {
    const queryString = url.split("?")[1];
    const utmParams = {};
  
    if (queryString) {
      const queryParams = queryString.split("&");
      queryParams.forEach(param => {
        const [key, value] = param.split("=");
        if (key.startsWith("utm_")) {
          utmParams[key] = decodeURIComponent(value);
        }
      });
    }
  
    return utmParams;
  }
  
  // const strURL = "https://www.code-brew.com/dating-app-development/?utm_source=google_search&utm_medium=Dating_UnitedKingdom&utm_campaign=18029782028&utm_campaign=18029782028&utm_term=make%20your%20own%20dating%20app&acc=tSXp0c0N&gclid=EAIaIQobChMIvaDrm9TogQMVA-TtCh2JOwVJEAAYASAAEgJTpPD_BwE";
  let strURL = "https://royoapps.com/rides/?utm_source=google_search&utm_medium=Transportation_MiddleEast&utm_term=transportation%20app%20development%20company&utm_campaign=18897250693&acc=qSsSiY6H&gclid=EAIaIQobChMIgO3E7_eBggMVCON3Ch2QPw-8EAAYBCAAEgLo-_D_BwE"
  const extractedUTM = extractUTMParameters(strURL);
  
  console.log("UTM Source:", extractedUTM.utm_source);
  console.log("UTM Medium:", extractedUTM.utm_medium);
  console.log("UTM Campaign:", extractedUTM.utm_campaign);
  console.log("UTM Term:", extractedUTM.utm_term);
  
  