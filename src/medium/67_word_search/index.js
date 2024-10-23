/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
let exist = function(board, word) {
    if (!board || board.length === 0 || board[0].length === 0) return false;

    const rows = board.length;
    const cols = board[0].length;

    // Directions for moving up, down, left, right
    const directions = [
        [0, 1], // right
        [1, 0], // down
        [0, -1], // left
        [-1, 0] // up
    ];

    // Helper function for DFS
    const dfs = (row, col, index) => {
        // If we have matched the entire word
        if (index === word.length) return true;

        // Check boundaries and if the current cell matches the word's character
        if (row < 0 || row >= rows || col < 0 || col >= cols || board[row][col] !== word[index]) {
            return false;
        }

        // Save the character to mark it as visited
        const temp = board[row][col];
        board[row][col] = '#'; // Mark as visited

        // Explore the neighbors in all four directions
        for (const [dx, dy] of directions) {
            if (dfs(row + dx, col + dy, index + 1)) {
                return true; // Found the word
            }
        }

        // Restore the character for backtracking
        board[row][col] = temp;

        return false; // Not found
    };

    // Iterate through each cell in the board
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (dfs(i, j, 0)) {
                return true; // Word found
            }
        }
    }

    return false; // Word not found
};

module.exports = exist;
