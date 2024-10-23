/**
 * @param {number[]} nums
 * @return {number}
 */
let missingNumber = function(nums) {
    const n = nums.length; // n is the length of the array
    const expectedSum = (n * (n + 1)) / 2; // Sum of the first n natural numbers
    const actualSum = nums.reduce((acc, num) => acc + num, 0); // Sum of elements in nums
    return expectedSum - actualSum; // The missing number
};

module.exports = missingNumber;
