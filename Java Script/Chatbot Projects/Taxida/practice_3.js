function compareTimes(time1, time2) {
  // Parse the time strings to extract hours, minutes, and AM/PM
  const [hours1, minutes1, period1] = time1.split(/[.: ]/);
  const [hours2, minutes2, period2] = time2.split(/[.: ]/);
  
  // Convert hours and minutes to numbers
  const numericHours1 = parseInt(hours1, 10);
  const numericMinutes1 = parseInt(minutes1, 10);
  const numericHours2 = parseInt(hours2, 10);
  const numericMinutes2 = parseInt(minutes2, 10);

  // Convert the time to 24-hour format for easier comparison
  const timeInMinutes1 = (period1 === 'PM' && numericHours1 !== 12) ? (numericHours1 + 12) * 60 + numericMinutes1 : numericHours1 * 60 + numericMinutes1;
  const timeInMinutes2 = (period2 === 'PM' && numericHours2 !== 12) ? (numericHours2 + 12) * 60 + numericMinutes2 : numericHours2 * 60 + numericMinutes2;

  // Compare the times and return true or false
  return timeInMinutes1 < timeInMinutes2;
}

// Example usage:
const time1 = "11:50 AM";
const time2 = "12:01 PM";

const result = compareTimes(time1, time2);
console.log(result.toString()); // Output will be true if time1 is greater than time2, otherwise false.
