/**
 * @param {character[][]} board
 * @return {boolean}
 */
let isValidSudoku = function(board) {
    const rows = Array.from({ length: 9 }, () => new Set());
    const cols = Array.from({ length: 9 }, () => new Set());
    const boxes = Array.from({ length: 9 }, () => new Set());

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const currentValue = board[i][j];
            if (currentValue === '.') {
                continue; // Skip empty cells
            }

            // Calculate the index for the 3x3 box
            const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
            
            // Check for duplicates in rows, columns, and boxes
            if (rows[i].has(currentValue) || 
                cols[j].has(currentValue) || 
                boxes[boxIndex].has(currentValue)) {
                return false; // Invalid if a duplicate is found
            }

            // Add the number to the respective sets
            rows[i].add(currentValue);
            cols[j].add(currentValue);
            boxes[boxIndex].add(currentValue);
        }
    }

    return true; // Valid if no duplicates were found
};

module.exports = isValidSudoku;
