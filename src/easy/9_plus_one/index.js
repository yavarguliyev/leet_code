/**
 * @param {number[]} digits
 * @return {number[]}
 */
let plusOne = function(digits) {
  // Start from the last digit and work backwards
  for (let i = digits.length - 1; i >= 0; i--) {
      // If the current digit is less than 9, just increment it and return the array
      if (digits[i] < 9) {
          digits[i]++;
          return digits; // Return early since no carry-over is needed
      }
      // If the current digit is 9, set it to 0 and continue to the next digit
      digits[i] = 0;
  }

  // If we exit the loop, it means we had a carry over (all digits were 9)
  // We need to add a new digit at the beginning of the array
  return [1, ...digits]; // Spread operator to create a new array
};

module.exports = plusOne;
