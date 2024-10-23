/**
 * @param {number[][]} matrix
 * @return {number}
 */
let longestIncreasingPath = function(matrix) {
    if (!matrix.length || !matrix[0].length) return 0;

    const m = matrix.length;
    const n = matrix[0].length;
    const memo = Array.from({ length: m }, () => Array(n).fill(-1));

    const dfs = (x, y) => {
        if (memo[x][y] !== -1) return memo[x][y]; // Return already computed result

        const directions = [
            [0, 1], // right
            [1, 0], // down
            [0, -1], // left
            [-1, 0]  // up
        ];

        let maxLength = 1; // At least the cell itself

        for (const [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;

            // Check boundaries and if the next cell is increasing
            if (nx >= 0 && nx < m && ny >= 0 && ny < n && matrix[nx][ny] > matrix[x][y]) {
                maxLength = Math.max(maxLength, 1 + dfs(nx, ny));
            }
        }

        memo[x][y] = maxLength; // Memoize the result
        return maxLength;
    };

    let longestPath = 0;

    // Iterate through each cell to find the longest path
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            longestPath = Math.max(longestPath, dfs(i, j));
        }
    }

    return longestPath;
};

module.exports = { longestIncreasingPath };