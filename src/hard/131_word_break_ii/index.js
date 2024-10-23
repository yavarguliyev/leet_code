/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
let wordBreak = function(s, wordDict) {
    const wordSet = new Set(wordDict); // Convert wordDict to a set for O(1) lookups
    const memo = {}; // Memoization object

    // Helper function for backtracking
    const backtrack = (start) => {
        // If we've computed this start index before, return its result
        if (memo[start]) return memo[start];

        const sentences = []; // Array to store valid sentences

        // If we've reached the end of the string, return an empty string for concatenation
        if (start === s.length) {
            return ['']; // Return an array with an empty string to help in concatenation
        }

        // Explore all possible end indices for words
        for (let end = start + 1; end <= s.length; end++) {
            const word = s.slice(start, end);
            if (wordSet.has(word)) {
                const restOfSentences = backtrack(end); // Recursively find valid sentences for the rest
                for (const sentence of restOfSentences) {
                    sentences.push(word + (sentence ? ' ' + sentence : '')); // Construct the sentence
                }
            }
        }

        memo[start] = sentences; // Store the result in memo
        return sentences; // Return the valid sentences
    };

    return backtrack(0); // Start backtracking from index 0
};

module.exports = wordBreak;