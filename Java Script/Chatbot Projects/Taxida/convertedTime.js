

function reduceMinutesFromDate(dateTimeString, minutes) {
  const dateRegex = /^(\d{2})-(\d{2})-(\d{4}) (\d{2}):(\d{2}) (AM|PM)$/;
  const [, day, month, year, hour, minute, ampm] = dateTimeString.match(dateRegex);

  let hourIn24Format = parseInt(hour);
  if (ampm === 'PM' && hourIn24Format !== 12) {
    hourIn24Format += 12;
  } else if (ampm === 'AM' && hourIn24Format === 12) {
    hourIn24Format = 0;
  }

  const dateObj = new Date(year, month - 1, day, hourIn24Format, minute);
  const reducedDate = new Date(dateObj.getTime() - minutes * 60000);

  const reducedDay = String(reducedDate.getDate()).padStart(2, '0');
  const reducedMonth = String(reducedDate.getMonth() + 1).padStart(2, '0');
  const reducedYear = reducedDate.getFullYear();
  let reducedHour = reducedDate.getHours();
  const reducedMinute = String(reducedDate.getMinutes()).padStart(2, '0');
  const reducedAmPm = reducedHour >= 12 ? 'PM' : 'AM';

  if (reducedHour === 0) {
    reducedHour = 12;
  } else if (reducedHour > 12) {
    reducedHour -= 12;
  }

  return `${reducedDay}-${reducedMonth}-${reducedYear} ${String(reducedHour).padStart(2, '0')}:${reducedMinute} ${reducedAmPm}`;
}

const inputDateTime = "01-07-2023 12:00 AM";
const reducedDateTime = reduceMinutesFromDate(inputDateTime, 15);
console.log(reducedDateTime);


let [conDate,conTime,conAMPM] = reducedDateTime.split(" ")
conDate = conDate.split("-").reverse().join("-")
let convertedDate = conDate+"T"+conTime+":00+05:30"
console.log(convertedDate)
// 2023-08-02T17:00:00+05:30





