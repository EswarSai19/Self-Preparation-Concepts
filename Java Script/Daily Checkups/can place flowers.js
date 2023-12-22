var canPlaceFlowers = function (flowerbed, n) {
  let count = 0,
    left = 1,
    right = left + 2,
    mid = left + 1,
    uni = 0,
    num = n;
  while (n > 0 && uni < flowerbed.length) {
    if (flowerbed.length < 2 && flowerbed[0] == 0) {
      flowerbed[0] = 1;
      count++;
      n--;
      console.log("0", flowerbed);
    } else if (flowerbed[0] == 0 && flowerbed[1] == 0) {
      flowerbed[0] = 1;
      count++;
      n--;
      console.log("1:", flowerbed);
    } else if (
      flowerbed[flowerbed.length - 1] == 0 &&
      flowerbed[flowerbed.length - 2] == 0
    ) {
      flowerbed[flowerbed.length - 1] = 1;
      count++;
      n--;
      console.log("2:", flowerbed);
    }
  }

  while (n > 0 && right < flowerbed.length) {
    console.log("n:", n);
    console.log("right:", right);
    console.log("count:", count);
    if (flowerbed[0] == 0 && flowerbed[1] == 0) {
      flowerbed[0] = 1;
      count++;
      n--;
      console.log("1:", flowerbed);
    } else if (
      flowerbed[flowerbed.length - 1] == 0 &&
      flowerbed[flowerbed.length - 2] == 0
    ) {
      flowerbed[flowerbed.length - 1] = 1;
      count++;
      n--;
      console.log("2:", flowerbed);
    } else if (
      flowerbed[left] == 0 &&
      flowerbed[mid] == 0 &&
      flowerbed[right] == 0
    ) {
      flowerbed[mid] = 1;
      count++;
      n--;
      console.log("3:", flowerbed);
    } else {
      left++;
      right++;
      mid++;
      console.log("4:", flowerbed);
    }
    console.log("n:", n);
    console.log("right:", right);
    console.log("count:", count);
  }
  if (count == num) return true;
  else return false;
};

console.log(canPlaceFlowers([0, 0, 0], 2));
