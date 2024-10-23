/**
 * @param {number} n
 * @return {boolean}
 */
let isHappy = function(n) {
    const seen = new Set(); // To track numbers we've encountered

    while (n !== 1) {
        if (seen.has(n)) {
            return false; // Cycle detected
        }
        
        seen.add(n);
        
        // Calculate the sum of the squares of the digits
        n = sumOfSquares(n);
    }
    
    return true; // Reached 1, so it's a happy number
};

// Helper function to calculate the sum of the squares of the digits
function sumOfSquares(num) {
    let sum = 0;
    while (num > 0) {
        const digit = num % 10; // Get the last digit
        sum += digit * digit; // Square the digit and add to sum
        num = Math.floor(num / 10); // Remove the last digit
    }
    return sum;
}

module.exports = isHappy;
