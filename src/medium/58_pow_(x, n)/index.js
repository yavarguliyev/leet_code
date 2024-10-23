/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
let myPow = function(x, n) {
    // Base case: x^0 is 1
    if (n === 0) return 1;

    // Handle negative powers
    if (n < 0) {
        x = 1 / x; // Take reciprocal
        n = -n;    // Make n positive
    }

    let result = 1;
    while (n > 0) {
        // If n is odd, multiply the current x to the result
        if (n % 2 === 1) {
            result *= x;
        }
        // Square x and reduce n
        x *= x;   // x = x^2
        n = Math.floor(n / 2); // n = n // 2 (integer division)
    }
    
    return result;
};

module.exports = myPow;
