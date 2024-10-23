/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
*/
let isMatch = function(s, p) {
    const dp = Array(s.length + 1).fill(false).map(() => Array(p.length + 1).fill(false));
    
    // Base case: Empty string matches empty pattern
    dp[0][0] = true;
    
    // Handle patterns like a*, a*b*, a*b*c* that can match an empty string
    for (let j = 1; j <= p.length; j++) {
        if (p[j - 1] === '*') {
            dp[0][j] = dp[0][j - 2];
        }
    }
    
    // Fill the dp table
    for (let i = 1; i <= s.length; i++) {
        for (let j = 1; j <= p.length; j++) {
            if (p[j - 1] === '.' || p[j - 1] === s[i - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else if (p[j - 1] === '*') {
                dp[i][j] = dp[i][j - 2]; // Consider zero occurrence of the preceding element
                if (p[j - 2] === s[i - 1] || p[j - 2] === '.') {
                    dp[i][j] = dp[i][j] || dp[i - 1][j]; // One or more occurrence
                }
            }
        }
    }
    
    return dp[s.length][p.length];
};

module.exports = isMatch;