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





// let inputTime = data.variables.trip_timings;
let inputTime = presentTimeInIndia;
// let delayTime = data.variables.delay_time || data.variables.trip_data_obj.messageToBeTriggeredInMins
// let delayTime = data.variables.delay_time || data.variables.trip_data_obj.messageToBeTriggeredInMins
// Convert the input time to a JavaScript Date object
let timeParts = inputTime.split(/[- :]/);
let year = parseInt(timeParts[2], 10);
let month = parseInt(timeParts[1], 10) - 1; // Month is zero-indexed in JavaScript
let day = parseInt(timeParts[0], 10);
let hours = parseInt(timeParts[3], 10);
let minutes = parseInt(timeParts[4], 10);

if (timeParts[5].toUpperCase() === "PM" && hours !== 12) {
    hours += 12;
} else if (timeParts[5].toUpperCase() === "AM" && hours === 12) {
    hours = 0;
}

let inputDate = new Date(year, month, day, hours, minutes);

// Add or subtract 10 minutes
// let minutesToAddOrSubtract = delayTime;
let minutesToAddOrSubtract = 5;
if(minutesToAddOrSubtract<=0) {minutesToAddOrSubtract=1}
inputDate.setMinutes(inputDate.getMinutes() + minutesToAddOrSubtract);

// Format the result in 24-hour format
let resultDate = `${(inputDate.getDate() + "").padStart(2, "0")}-${(inputDate.getMonth() + 1 + "").padStart(2, "0")}-${inputDate.getFullYear()} ${(inputDate.getHours() + "").padStart(2, "0")}:${(inputDate.getMinutes() + "").padStart(2, "0")}`;


let [conDate,conTime] = resultDate.split(" ")
    conDate = conDate.split("-").reverse().join("-")
let convertedDate = conDate+"T"+conTime+":00+05:30"

console.log(convertedDate);