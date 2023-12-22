// let arr = [1, 2, 3, 4, 5];

// function binary(x) {
//   return x.toString(2);
// }
// const output = arr.map(binary);
// console.log(output);
// // Map in single line

// const output2 = arr.map((x) => x.toString(2));
// console.log(output2);

// // filter in single line
// const output3 = arr.filter((x) => x % 2 == 0);
// console.log(output3);

// // reduce function
// const reduop = arr.reduce((acc, cur) => {
//   if (cur > acc) {
//     acc = cur;
//   }
//   return acc;
// }, 0);
// // console.log(reduop);

const users = [
  { firstName: "Eswar", lastName: "Sai", age: 28 },
  { firstName: "Sunitha", lastName: "Avidi", age: 25 },
  { firstName: "Naga", lastName: "Tarun", age: 27 },
  { firstName: "Kim", lastName: "Jisoo", age: 28 },
];

// Required output {25: 1, 27: 1, 28: 2}
const op = users.reduce((acc, curr) => {
  if (!acc[curr.age]) {
    acc[curr.age] = 1;
  } else {
    acc[curr.age]++;
  }
  return acc;
}, {});
// console.log(op);

// first name of aged below  30 people
const op2 = users.filter((i) => i.age < 30).map((x) => x.firstName);
// console.log(op2);
const op3 = users.reduce((acc, cur) => {
  if (cur.age < 30) acc.push(cur.firstName);
  return acc;
}, []);
console.log(op3);
