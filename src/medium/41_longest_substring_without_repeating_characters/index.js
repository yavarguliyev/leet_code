/**
 * @param {string} s
 * @return {number}
 */
let lengthOfLongestSubstring = function(s) {
    let charIndexMap = new Map(); // Keeps track of characters and their latest index
    let maxLength = 0;
    let start = 0; // Left pointer for the sliding window

    for (let end = 0; end < s.length; end++) {
        let char = s[end];

        // If the character is already in the map and its index is greater or equal to the current start,
        // it means we have a repeating character, so move the start pointer.
        if (charIndexMap.has(char) && charIndexMap.get(char) >= start) {
            start = charIndexMap.get(char) + 1;
        }

        // Update the map with the latest index of the character
        charIndexMap.set(char, end);

        // Update the max length of the substring without repeating characters
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
};

module.exports = lengthOfLongestSubstring;
