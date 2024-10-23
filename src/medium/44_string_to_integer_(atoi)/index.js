/**
 * @param {string} s
 * @return {number}
 */
let myAtoi = function(s) {
    const INT_MIN = -Math.pow(2, 31);
    const INT_MAX = Math.pow(2, 31) - 1;

    let index = 0;
    let n = s.length;
    
    // Step 1: Ignore leading whitespace
    while (index < n && s[index] === ' ') {
        index++;
    }

    // Step 2: Determine sign
    let sign = 1;
    if (index < n && (s[index] === '-' || s[index] === '+')) {
        sign = s[index] === '-' ? -1 : 1;
        index++;
    }

    // Step 3: Read digits
    let result = 0;
    while (index < n && s[index] >= '0' && s[index] <= '9') {
        const digit = s[index] - '0'; // Convert char to digit

        // Step 4: Check for overflow before updating result
        if (result > Math.floor(INT_MAX / 10) || (result === Math.floor(INT_MAX / 10) && digit > 7)) {
            return sign === 1 ? INT_MAX : INT_MIN;
        }
        
        result = result * 10 + digit;
        index++;
    }

    return result * sign;
};

module.exports = myAtoi;
