/**
 * @param {number} n
 * @return {string[]}
 */
let generateParenthesis = function(n) {
    let result = [];
    
    const backtrack = (current, open, close) => {
        // If the current string has reached the maximum length, add it to the result
        if (current.length === n * 2) {
            result.push(current);
            return;
        }
        
        // If we can still add an opening parenthesis, do so
        if (open < n) {
            backtrack(current + '(', open + 1, close);
        }
        
        // If we can add a closing parenthesis, do so
        if (close < open) {
            backtrack(current + ')', open, close + 1);
        }
    };
    
    // Start backtracking with an empty string and 0 opening/closing parentheses
    backtrack('', 0, 0);
    
    return result;
};

module.exports = generateParenthesis;
