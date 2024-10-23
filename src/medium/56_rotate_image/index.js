/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
let rotate = function(matrix) {
    const n = matrix.length;

    // Step 1: Transpose the matrix
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            // Swap elements at (i, j) and (j, i)
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }

    // Step 2: Reverse each row
    for (let i = 0; i < n; i++) {
        matrix[i].reverse();
    }
};

module.exports = rotate;
