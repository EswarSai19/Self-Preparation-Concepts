function convertTo24HrFormat(timeString) {
    let [time, period] = timeString.split(" ");
    let [hours, minutes] = time.split(":");
    hours = parseInt(hours);
  
    if (period === "PM" && hours !== 12) {
      hours += 12;
    } else if (period === "AM" && hours === 12) {
      hours = 0;
    }
  
    hours = hours.toString().padStart(2, "0");
  
    return `${hours}:${minutes}`;
  }
  
  const timeIn24HrFormat = convertTo24HrFormat("01:05 AM");
  console.log(timeIn24HrFormat); // Output: "15:05"
  