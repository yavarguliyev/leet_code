/**
 * @param {number} n
 * @return {boolean}
 */
let isPowerOfThree = function(n) {
    if (n <= 0) return false; // Base case: negative numbers and zero are not powers of three
    
    // Keep dividing n by 3
    while (n % 3 === 0) {
        n /= 3;
    }
    
    // If we end up with 1, it's a power of three
    return n === 1;
};

module.exports = isPowerOfThree;
