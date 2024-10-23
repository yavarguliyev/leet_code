/**
 * @param {number[]} nums
 * @return {number}
 */
let firstMissingPositive = function(nums) {
  const n = nums.length;

  // Step 1: Place each number in its correct position
  for (let i = 0; i < n; i++) {
      // While the current number is in the range [1, n]
      // and it's not in the right position, swap it with the correct position
      while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
          const temp = nums[i];
          nums[i] = nums[temp - 1];
          nums[temp - 1] = temp;
      }
  }

  // Step 2: Check for the first missing positive
  for (let i = 0; i < n; i++) {
      if (nums[i] !== i + 1) {
          return i + 1; // The first missing positive integer
      }
  }

  // If all positions are correct, return n + 1
  return n + 1;
};

module.exports = firstMissingPositive;