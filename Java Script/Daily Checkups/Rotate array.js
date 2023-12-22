let nums = [1, 2, 3, 4, 5, 6, 7],
  k = 5;
if (k > nums.length) {
  k = Math.floor(k % nums.length);
}
let arr = nums;
nums = nums.slice(0, k + 1);
arr = arr.slice(k + 1, arr.length);
nums = [...arr, ...nums];
console.log(nums);
