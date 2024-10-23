/**
 * @param {string} digits
 * @return {string[]}
 */
let letterCombinations = function(digits) {
    // Edge case: if digits is empty, return an empty array
    if (!digits.length) return [];
    
    // Mapping of digits to corresponding letters
    const digitToChar = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z']
    };
    
    // Result array to store all combinations
    const result = [];
    
    // Backtracking function to generate combinations
    const backtrack = (index, currentCombination) => {
        // Base case: if current combination length is equal to the digits length
        if (currentCombination.length === digits.length) {
            result.push(currentCombination.join(''));  // Join letters and add to result
            return;
        }
        
        // Get the letters that the current digit maps to, and loop through them
        const letters = digitToChar[digits[index]];
        for (let letter of letters) {
            // Append the current letter and move to the next digit
            currentCombination.push(letter);
            backtrack(index + 1, currentCombination);
            currentCombination.pop();  // Backtrack
        }
    };
    
    // Start backtracking from the first digit
    backtrack(0, []);
    
    return result;
};

module.exports = letterCombinations;
