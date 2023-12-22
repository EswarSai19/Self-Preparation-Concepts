// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell
// on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on
// day 1 is not allowed because you must buy before you sell.
let prices = [7, 1, 5, 3, 6, 4];
// let prices = [7, 6, 4, 3, 1];

let max = 0,
  min = Infinity,
  count = 0;
for (let i = 0; i < prices.length; i++) {
  if (prices[i] < min) {
    min = prices[i];
  } else if (prices[i] - min > max) {
    max = prices[i] - min;
  }
}
console.log(max);
