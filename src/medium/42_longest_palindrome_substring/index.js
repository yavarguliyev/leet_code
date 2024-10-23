/**
 * @param {string} s
 * @return {string}
 */
let longestPalindrome = function(s) {
    if (s.length === 0) return "";

    let start = 0, end = 0;

    // Helper function to expand around the center
    const expandAroundCenter = (s, left, right) => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        // Return length of the current palindrome
        return right - left - 1;
    };

    for (let i = 0; i < s.length; i++) {
        // Expand around a single character (odd-length palindrome)
        let len1 = expandAroundCenter(s, i, i);
        // Expand around two consecutive characters (even-length palindrome)
        let len2 = expandAroundCenter(s, i, i + 1);
        
        // Take the maximum length from both types
        let len = Math.max(len1, len2);

        // Update the start and end indices if we found a longer palindrome
        if (len > end - start) {
            start = i - Math.floor((len - 1) / 2);
            end = i + Math.floor(len / 2);
        }
    }

    // Return the longest palindromic substring
    return s.substring(start, end + 1);
};

module.exports = longestPalindrome;
