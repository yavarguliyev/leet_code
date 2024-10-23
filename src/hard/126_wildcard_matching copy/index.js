/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
let minWindow = function(s, t) {
    if (!s || !t) return "";

    const charCountT = {};
    for (const char of t) {
        charCountT[char] = (charCountT[char] || 0) + 1;
    }

    let required = Object.keys(charCountT).length;
    let left = 0;
    let right = 0;
    let formed = 0;
    const windowCounts = {};
    let minLength = Infinity;
    let minWindow = "";

    while (right < s.length) {
        const char = s[right];
        windowCounts[char] = (windowCounts[char] || 0) + 1;

        // Check if the current character added to the window satisfies the requirement
        if (char in charCountT && windowCounts[char] === charCountT[char]) {
            formed++;
        }

        // Try to contract the window till the point it ceases to be 'desirable'
        while (left <= right && formed === required) {
            const charLeft = s[left];

            // Save the smallest window and update minLength
            if (right - left + 1 < minLength) {
                minLength = right - left + 1;
                minWindow = s.substring(left, right + 1);
            }

            // The character at the position pointed by `left` is no longer a part of the window
            windowCounts[charLeft]--;
            if (charLeft in charCountT && windowCounts[charLeft] < charCountT[charLeft]) {
                formed--;
            }

            left++;
        }

        // Keep expanding the right pointer
        right++;
    }

    return minWindow;
};

module.exports = minWindow;