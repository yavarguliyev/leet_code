/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
let setZeroes = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    let isCol = false; // To track if the first column needs to be zeroed

    // First pass: use the first row and first column to mark zeroes
    for (let i = 0; i < m; i++) {
        if (matrix[i][0] === 0) {
            isCol = true; // Mark the first column
        }
        for (let j = 1; j < n; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0; // Mark the start of the row
                matrix[0][j] = 0; // Mark the start of the column
            }
        }
    }

    // Second pass: use the marks to zero out the cells
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }

    // Zero out the first row if needed
    if (matrix[0][0] === 0) {
        for (let j = 0; j < n; j++) {
            matrix[0][j] = 0;
        }
    }

    // Zero out the first column if needed
    if (isCol) {
        for (let i = 0; i < m; i++) {
            matrix[i][0] = 0;
        }
    }
};

module.exports = setZeroes;
