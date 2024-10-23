/**
 * @param {number} n
 * @return {number}
 */
let hammingWeight = function(n) {
    let count = 0;
    
    // Iterate until n becomes 0
    while (n > 0) {
        // Increment count if the last bit is 1
        count += n & 1;
        // Right shift n by 1
        n >>>= 1; // Use unsigned right shift to avoid sign issues
    }
    
    return count;
};

module.exports = hammingWeight;
