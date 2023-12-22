function getPresentTimeInIndia() {
    // Get the current time in UTC
    let currentTime = new Date();
  
    // Get the current UTC time offset in minutes
    let currentOffset = currentTime.getTimezoneOffset();
  
    // Calculate the IST offset in minutes (IST is UTC+5:30)
    let ISTOffset = 330;
  
    // Calculate the total offset
    let totalOffset = currentOffset + ISTOffset;
  
    // Calculate the total milliseconds to adjust the time
    let totalOffsetMilliseconds = totalOffset * 60 * 1000;
  
    // Obtain the time in India by adding the total offset milliseconds
    let indiaTime = new Date(currentTime.getTime() + totalOffsetMilliseconds);
  
    // Extract the individual components of the India time
    let year = indiaTime.getFullYear();
    let month = String(indiaTime.getMonth() + 1).padStart(2, "0");
    let day = String(indiaTime.getDate()).padStart(2, "0");
    let hours = indiaTime.getHours();
    let minutes = indiaTime.getMinutes();
  
    // Format the time as a string in "DD-MM-YYYY hh:mm AM/PM" format
    let period = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    hours = hours.toString().padStart(2, "0");
    minutes = minutes.toString().padStart(2, "0");
  
    let timeString = day + "-" + month + "-" + year + " " + hours + ":" + minutes + " " + period;
  
    return timeString;
  }
  
  const presentTimeInIndia = getPresentTimeInIndia();
  console.log(presentTimeInIndia);
  
  