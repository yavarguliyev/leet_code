/**
 * @param {number} n
 * @return {string}
 */
let countAndSay = function(n) {
    // Base case
    if (n === 1) return "1";

    let result = "1"; // Initialize the first element of the sequence

    for (let i = 2; i <= n; i++) {
        let newResult = "";
        let count = 1;

        // Process the current result to create the next one
        for (let j = 1; j < result.length; j++) {
            // If the current character is the same as the previous one, increment the count
            if (result[j] === result[j - 1]) {
                count++;
            } else {
                // Otherwise, append the count and the previous character to the new result
                newResult += count + result[j - 1];
                count = 1; // Reset count for the new character
            }
        }

        // Append the last counted character
        newResult += count + result[result.length - 1];
        result = newResult; // Update result for the next iteration
    }

    return result; // Return the final result for the nth element
};

module.exports = countAndSay;
