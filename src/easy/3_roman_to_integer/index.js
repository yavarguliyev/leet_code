/**
 * @param {string} s
 * @return {number}
 */
let romanToInt = function(s) {
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    
    let total = 0;
    
    for (let i = 0; i < s.length; i++) {
        let current = romanMap[s[i]];
        let next = romanMap[s[i + 1]];
        
        // If current numeral is smaller than the next one, we subtract it
        if (current < next) {
            total -= current;
        } else {
            total += current;
        }
    }
    
    return total;
};

module.exports = romanToInt;
