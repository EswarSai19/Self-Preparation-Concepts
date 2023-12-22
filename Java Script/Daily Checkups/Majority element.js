function majorityElement(nums) {
    let candidate = nums[0];
    let count = 1;

    for (let i = 1; i < nums.length; i++) {
        if (count === 0) {
            candidate = nums[i];
            count = 1;
        } else if (candidate === nums[i]) {
            count++;
        } else {
            count--;
        }
        console.log(count, "Count")
    }

    return candidate;
}

// Example usage:
const nums1 = [3, 2, 3];
// console.log(majorityElement(nums1)); // Output: 3

const nums2 = [2, 2, 1, 1, 1, 2, 2];
console.log(majorityElement(nums2)); // Output: 2
