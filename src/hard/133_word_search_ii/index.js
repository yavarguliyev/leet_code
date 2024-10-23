/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
class TrieNode {
  constructor() {
      this.children = {};
      this.isEnd = false;
  }
}

class Trie {
  constructor() {
      this.root = new TrieNode();
  }

  insert(word) {
      let node = this.root;
      for (const char of word) {
          if (!node.children[char]) {
              node.children[char] = new TrieNode();
          }
          node = node.children[char];
      }
      node.isEnd = true;
  }
}

let findWords = function(board, words) {
  const trie = new Trie();
  const result = new Set();
  const rows = board.length;
  const cols = board[0].length;

  // Build the Trie from the words
  for (const word of words) {
      trie.insert(word);
  }

  const backtrack = (i, j, node, path) => {
      const char = board[i][j];
      node = node.children[char];
      if (node.isEnd) {
          result.add(path + char);
      }

      // Mark the cell as visited
      board[i][j] = '#';

      // Explore neighbors: up, down, left, right
      const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
      for (const [dx, dy] of directions) {
          const newRow = i + dx;
          const newCol = j + dy;
          if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols && board[newRow][newCol] !== '#' && node.children[board[newRow][newCol]]) {
              backtrack(newRow, newCol, node, path + char);
          }
      }

      // Restore the cell after visiting
      board[i][j] = char;
  };

  for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
          const char = board[i][j];
          if (trie.root.children[char]) {
              backtrack(i, j, trie.root, '');
          }
      }
  }

  return Array.from(result);
};

module.exports = { TrieNode, Trie, findWords };