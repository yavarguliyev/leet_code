/**
 * @param {number} x
 * @return {number}
 */
let reverseInteger = function(x) {
    const INT_MIN = -Math.pow(2, 31);
    const INT_MAX = Math.pow(2, 31) - 1;
    
    let result = 0;
    let num = Math.abs(x);

    while (num > 0) {
        const digit = num % 10;
        num = Math.floor(num / 10);
        
        // Check for overflow before adding the digit to result
        if (result > Math.floor(INT_MAX / 10) || (result === Math.floor(INT_MAX / 10) && digit > 7)) {
            return 0;
        }
        result = result * 10 + digit;
    }
    
    return x < 0 ? -result : result;
};

module.exports = reverseInteger;
