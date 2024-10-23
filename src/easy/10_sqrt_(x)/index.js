/**
 * @param {number} x
 * @return {number}
 */
let mySqrt = function(x) {
  if (x < 2) return x;  // If x is 0 or 1, return x immediately

  let left = 1, right = x;
  let result = 0;

  // Binary search for the square root
  while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      let square = mid * mid;

      if (square === x) {
          return mid;  // Found exact square root
      } else if (square < x) {
          result = mid;  // Update result and search in the right half
          left = mid + 1;
      } else {
          right = mid - 1;  // Search in the left half
      }
  }

  return result;
};

module.exports = mySqrt;
