console.log("Start");
setTimeout(function () {
  console.log("CB set timeout");
});
console.log("End");

// let startTime = new Date().getTime();
// let endTime = startTime;
// while (endTime < startTime + 13000) {
//   endTime = new Date().getTime();
// }
// console.log("While loop expired");

// So even the 5 seconds expired the "CB set timeout" is not
// not printed due to call stack is busy with executing some
// other code. This is why we can not trust setTimeout()
