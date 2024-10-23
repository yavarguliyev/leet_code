/**
 * @param {number[]} nums
 * @return {number}
 */
let removeDuplicates = function(nums) {
  if (nums.length === 0) return 0;

  let i = 0;  // Initialize the slow pointer

  // Start the fast pointer from 1
  for (let j = 1; j < nums.length; j++) {
      // If we find a new unique element
      if (nums[j] !== nums[i]) {
          i++;  // Move the slow pointer forward
          nums[i] = nums[j];  // Copy the unique element to nums[i]
      }
  }

  // The number of unique elements is i + 1
  return i + 1;
};

module.exports = removeDuplicates;
