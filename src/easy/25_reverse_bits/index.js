/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
let reverseBits = function(n) {
    let reversed = 0;

    for (let i = 0; i < 32; i++) {
        // Get the last bit of n
        const lastBit = n & 1;
        // Shift reversed to the left to make space for the last bit
        reversed = (reversed << 1) | lastBit;
        // Shift n to the right to process the next bit
        n >>>= 1; // Use unsigned right shift to avoid sign issues
    }

    return reversed >>> 0; // Convert to unsigned integer
};

module.exports = reverseBits;
