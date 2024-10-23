/**
 * @param {number[]} nums
 * @return {number}
 */
let singleNumber = function(nums) {
  let single = 0; // Initialize a variable to store the result
  for (let num of nums) {
      single ^= num; // Apply XOR for each number
  }
  return single; // Return the single number
};

module.exports = singleNumber;
