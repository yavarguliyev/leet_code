/**
 * @param {string} s
 * @return {number}
 */
let numDecodings = function(s) {
    // Edge case: if the string is empty or starts with '0', return 0
    if (!s || s[0] === '0') return 0;

    const n = s.length;
    const dp = new Array(n + 1).fill(0);
    dp[0] = 1; // There's one way to decode an empty string

    for (let i = 1; i <= n; i++) {
        // Check the last single digit
        const oneDigit = s[i - 1];
        if (oneDigit !== '0') {
            dp[i] += dp[i - 1];
        }

        // Check the last two digits
        if (i > 1) {
            const twoDigits = s.substring(i - 2, i);
            if (twoDigits >= '10' && twoDigits <= '26') {
                dp[i] += dp[i - 2];
            }
        }
    }

    return dp[n];
};

module.exports = numDecodings;
