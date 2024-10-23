/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
let uniquePaths = function(m, n) {
    const dp = Array(n).fill(1); // Only one row is needed initially

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[j] += dp[j - 1]; // Update the current cell
        }
    }

    return dp[n - 1]; // The last cell in the row represents the bottom-right corner
};

module.exports = uniquePaths;
