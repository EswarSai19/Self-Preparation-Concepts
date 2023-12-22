

// function convertTo12HourFormat(time) {
// const [hours, minutes, seconds] = time.split(':').map(Number);

// let period = 'AM';
// let hours12 = hours;

// if (hours >= 12) {
//     period = 'PM';
//     hours12 = hours === 12 ? 12 : hours % 12;
// }

// const formattedTime = `${hours12.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${period}`;
// return formattedTime;
// }

// Example usage
// const time = `${hours}:${minutes}:${seconds}`;
// const convertedTime = convertTo12HourFormat(time);
// console.log('Converted Time:', convertedTime);















// // Function to subtract two times
// function subtractTimes(time1, time2) {
//   const [hours1, minutes1, seconds1] = time1.split(':').map(Number);
//   const [hours2, minutes2, seconds2] = time2.split(':').map(Number);

//   let totalSeconds = seconds1 - seconds2;
//   let totalMinutes = minutes1 - minutes2;
//   let totalHours = hours1 - hours2;

//   // Handling negative values
//   if (totalSeconds < 0) {
//     totalSeconds += 60;
//     totalMinutes--;
//   }
//   if (totalMinutes < 0) {
//     totalMinutes += 60;
//     totalHours--;
//   }
//   if (totalHours < 0) {
//     totalHours += 24;
//   }

//   // Format the result with leading zeros
//   const result = `${padZero(totalHours)}:${padZero(totalMinutes)}:${padZero(totalSeconds)}`;
//   return result;
// }

// // Helper function to pad zero for single-digit values
// function padZero(value) {
//   return String(value).padStart(2, '0');
// }

// // Example usage
// const time1 = '10:25:35';
// const time2 = '03:50:15';

// console.log('Subtraction:', subtractTimes(time1, time2));






















// // Get the current date and time in IST
// const currentDate = new Date();
// const currentHours = currentDate.getUTCHours() + 5; // Adding 5 hours for IST
// const currentMinutes = currentDate.getUTCMinutes() + 30; // Adding 30 minutes for IST
// const currentAMPM = currentHours >= 12 ? 'PM' : 'AM';
// const formattedCurrentTime = `${currentHours % 12}:${currentMinutes.toString().padStart(2, '0')} ${currentAMPM}`;

// // Subtract time from the current time
// const subtractedHours = 0; // Number of hours to subtract
// const subtractedMinutes = 15; // Number of minutes to subtract

// // Create a new Date object and subtract the specified time
// const subtractedDate = new Date(currentDate);
// subtractedDate.setHours(currentHours - subtractedHours);
// subtractedDate.setMinutes(currentMinutes - subtractedMinutes);

// // Extract the subtracted time in the format HH:mm AM/PM
// const subtractedHoursFormatted = subtractedDate.getHours();
// const subtractedMinutesFormatted = subtractedDate.getMinutes();
// const subtractedAMPM = subtractedHoursFormatted >= 12 ? 'PM' : 'AM';
// const formattedSubtractedTime = `${subtractedHoursFormatted % 12}:${subtractedMinutesFormatted.toString().padStart(2, '0')} ${subtractedAMPM}`;

// // Output the result
// console.log(`Current Time (IST): ${formattedCurrentTime}`);
// console.log(`Subtracted Time (IST): ${formattedSubtractedTime}`);




















// Given time in the format HH:mm AM/PM (IST)
const givenTime = '12:00 AM';

// Parse the given time to extract hours, minutes, and AM/PM indicator
const [givenHours, givenMinutes, givenAMPM] = givenTime.split(/:| /);

// Convert hours and minutes to numbers
const givenHoursNum = parseInt(givenHours);
const givenMinutesNum = parseInt(givenMinutes);

// Subtract time from the given time
const subtractedHours = 0; // Number of hours to subtract
const subtractedMinutes = 15; // Number of minutes to subtract

// Perform the subtraction
let resultHours = givenHoursNum - subtractedHours;
let resultMinutes = givenMinutesNum - subtractedMinutes;

// Adjust negative minutes by borrowing from the hour
if (resultMinutes < 0) {
  resultHours--;
  resultMinutes += 60;
}

// Adjust negative hours and handle AM/PM transition
if (resultHours < 0) {
  resultHours += 12;
}

// Adjust AM/PM indicator when crossing over from AM to PM or vice versa
let resultAMPM = givenAMPM;
if (givenAMPM === 'PM' && resultHours < 12) {
  resultAMPM = 'AM';
} else if (givenAMPM === 'AM' && resultHours >= 12) {
  resultAMPM = 'PM';
}

// Format the result time
const formattedResultTime = `${resultHours.toString().padStart(2, '0')}:${resultMinutes.toString().padStart(2, '0')} ${resultAMPM}`;

// Output the result
console.log(`Given Time (IST): ${givenTime}`);
console.log(`Subtracted Time: ${formattedResultTime}`);
