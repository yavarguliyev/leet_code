/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
let isMatch = function(s, p) {
    const sLen = s.length;
    const pLen = p.length;

    // Create a 2D DP array with (sLen + 1) x (pLen + 1)
    const dp = Array.from({ length: sLen + 1 }, () => Array(pLen + 1).fill(false));

    // Empty pattern matches empty string
    dp[0][0] = true;

    // Fill the first row for patterns with '*'
    for (let j = 1; j <= pLen; j++) {
        if (p[j - 1] === '*') {
            dp[0][j] = dp[0][j - 1];
        }
    }

    // Fill the DP table
    for (let i = 1; i <= sLen; i++) {
        for (let j = 1; j <= pLen; j++) {
            if (p[j - 1] === s[i - 1] || p[j - 1] === '?') {
                dp[i][j] = dp[i - 1][j - 1]; // Match single character
            } else if (p[j - 1] === '*') {
                dp[i][j] = dp[i][j - 1] || dp[i - 1][j]; // Use '*' to match empty or one more character
            }
        }
    }

    return dp[sLen][pLen]; // Result is in the bottom-right corner of the DP table
};

module.exports = isMatch;