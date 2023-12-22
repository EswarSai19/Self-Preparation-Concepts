let isPalindrom = (str) => {
  let left = 0,
    right = str.length - 1;
  while (left < right) {
    if (str[left] != str[right]) {
      return false;
    } else {
      left++;
      right--;
    }
  }
  return true;
};

var longestPalindrome = function (s) {
  let max = 0,
    opstr = "";
  for (let i = 0; i < s.length; i++) {
    let bag = s[i];
    for (let j = i + 1; j < s.length; j++) {
      bag += s[j];
      if (isPalindrom(bag)) {
        if (max < bag.length) {
          max = bag.length;
          opstr = bag;
        }
      }
    }
  }
  if (s.length > 0 && max == 0) return s[0];
  return opstr;
};
console.log(longestPalindrome("aa"));
