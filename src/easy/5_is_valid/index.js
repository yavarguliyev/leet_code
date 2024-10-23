/**
 * @param {string} s
 * @return {boolean}
 */
let isValid = function(s) {
    const stack = [];
    const map = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);  // Push opening brackets to the stack
        } else if (stack.length && stack[stack.length - 1] === map[char]) {
            stack.pop();  // If closing bracket matches, pop the stack
        } else {
            return false;  // Mismatch or stack is empty
        }
    }

    return stack.length === 0;  // If the stack is empty, the string is valid
};

module.exports = isValid;
