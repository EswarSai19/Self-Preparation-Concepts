var romanToInt = function (s) {
  let count = 0;
  let arr = ["IV", "IX", "XL", "XC", "CD", "CM"];
  let arrNos = [4, 9, 40, 90, 400, 900];
  let skip = false;
  for (let j = 0; j < s.length; j++) {
    for (let i = 0; i < arr.length; i++) {
      if (s[j] + s[j + 1] == arr[i]) {
        count += arrNos[i];
        j++;
        skip = true;
      }
    }
    if (skip != true) {
      if (s[j] == "I") {
        count += 1;
      } else if (s[j] == "V") {
        count += 5;
      } else if (s[j] == "X") {
        count += 10;
      } else if (s[j] == "L") {
        count += 50;
      } else if (s[j] == "C") {
        count += 100;
      } else if (s[j] == "D") {
        count += 500;
      } else if (s[j] == "M") {
        count += 1000;
      }
    }

    skip = false;

    console.log(count);
  }

  return count;
};
console.log(romanToInt("MMMMCMXCIX"));
