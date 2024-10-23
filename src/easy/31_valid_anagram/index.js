/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
let isAnagram = function(s, t) {
    // If the lengths of the two strings are different, they cannot be anagrams
    if (s.length !== t.length) {
        return false;
    }

    // Create a frequency map for characters in string s
    const charCount = {};

    // Count each character in string s
    for (const char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Subtract the counts based on characters in string t
    for (const char of t) {
        if (!charCount[char]) {
            return false; // Character not found or more than needed
        }
        charCount[char] -= 1;
    }

    // Check if all counts are zero
    for (const count of Object.values(charCount)) {
        if (count !== 0) {
            return false; // There are characters left over
        }
    }

    return true; // The strings are anagrams
};

module.exports = isAnagram;
