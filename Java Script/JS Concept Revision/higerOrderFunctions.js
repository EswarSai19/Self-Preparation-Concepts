let radius = [3, 5, 8, 2];

const area = function (rad) {
  return Math.PI * rad * rad;
};

const circumference = function (rad) {
  return 2 * Math.PI * rad;
};

const diameter = function (rad) {
  return 2 * rad;
};

const calculate = function (radius, logic) {
  let output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};

Array.prototype.calculate = function (logic) {
  let output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(logic(this[i]));
  }
  return output;
};

console.log(radius.map(area));
console.log(radius.calculate(area));

// console.log(calulate(radius, area));
// console.log(calulate(radius, circumference));
// console.log(calulate(radius, diameter));
