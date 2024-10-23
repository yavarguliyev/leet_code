/**
 * @param {number} numRows
 * @return {number[][]}
 */
let generate = function(numRows) {
    const triangle = [];

    for (let i = 0; i < numRows; i++) {
        // Create a new row with default values
        const row = new Array(i + 1).fill(1); // Initialize the row with 1s

        // Calculate the values for the current row (except for the first and last elements)
        for (let j = 1; j < i; j++) {
            row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
        }

        // Add the current row to the triangle
        triangle.push(row);
    }

    return triangle;
};

module.exports = generate;
