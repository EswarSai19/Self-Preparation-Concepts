function addMinutesToCurrentTimeIST(minutes) {
    const currentTimeIST = new Date();
    const currentOffset = currentTimeIST.getTimezoneOffset(); // Get current time zone offset in minutes
    const ISTOffset = 330; // IST offset in minutes (5 hours 30 minutes)
  
    currentTimeIST.setMinutes(currentTimeIST.getMinutes() + currentOffset + ISTOffset); // Adjust for IST offset
  
    const hours = currentTimeIST.getHours();
    const minutesInIST = currentTimeIST.getMinutes();
  
    // Add minutes to the current time
    const resultDate = new Date();
    resultDate.setHours(hours);
    resultDate.setMinutes(minutesInIST + minutes);
  
    // Format the result
    const resultHours = resultDate.getHours() % 12 || 12;
    const resultMinutes = resultDate.getMinutes().toString().padStart(2, '0');
    const resultAMPM = resultDate.getHours() >= 12 ? 'PM' : 'AM';
    const formattedResultTime = `${resultHours.toString().padStart(2, '0')}:${resultMinutes} ${resultAMPM}`;
  
    return formattedResultTime;
  }
  
  // Example usage: Add 5 minutes to the current time
  const result = addMinutesToCurrentTimeIST(5);
  console.log(`Current Time (IST): ${new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata', hour12: true })}`);
  console.log(`Time after adding 5 minutes: ${result}`);
  