/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
let ladderLength = function(beginWord, endWord, wordList) {
  const wordSet = new Set(wordList); // Convert list to set for O(1) lookups
  if (!wordSet.has(endWord)) return 0; // Early exit if endWord is not in wordList

  const queue = [[beginWord, 1]]; // Queue to hold [currentWord, currentDepth]
  const visited = new Set([beginWord]); // Set to track visited words

  while (queue.length > 0) {
      const [currentWord, depth] = queue.shift(); // Get current word and its depth

      // Try all possible single letter changes
      for (let i = 0; i < currentWord.length; i++) {
          for (let char = 'a'.charCodeAt(0); char <= 'z'.charCodeAt(0); char++) {
              const newChar = String.fromCharCode(char);
              const newWord = currentWord.slice(0, i) + newChar + currentWord.slice(i + 1);

              if (newWord === endWord) {
                  return depth + 1; // Found the endWord, return depth + 1
              }
              
              if (wordSet.has(newWord) && !visited.has(newWord)) {
                  visited.add(newWord); // Mark as visited
                  queue.push([newWord, depth + 1]); // Add new word to queue with incremented depth
              }
          }
      }
  }

  return 0; // No transformation found
};

module.exports = ladderLength;