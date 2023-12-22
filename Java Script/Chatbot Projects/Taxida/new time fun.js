let inputTime = "21-10-2023 12:10 PM";
let delayTime = 5;

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

// Subtract the specified minutes
let minutesToSubtract = delayTime;
if (minutesToSubtract <= 0) {
    minutesToSubtract = 1;
}
inputDate.setMinutes(inputDate.getMinutes() - minutesToSubtract);

// Format the result in 24-hour format
let resultDate = `${(inputDate.getDate() + "").padStart(2, "0")}-${(inputDate.getMonth() + 1 + "").padStart(2, "0")}-${inputDate.getFullYear()} ${(inputDate.getHours() + "").padStart(2, "0")}:${(inputDate.getMinutes() + "").padStart(2, "0")}`;


let [conDate,conTime] = resultDate.split(" ")
    conDate = conDate.split("-").reverse().join("-")
let convertedDate = conDate+"T"+conTime+":00+05:30"

console.log(convertedDate);
