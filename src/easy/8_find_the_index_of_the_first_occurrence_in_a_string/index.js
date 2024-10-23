/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
let strStr = function(haystack, needle) {
  // If needle is an empty string, return 0
  if (needle === "") return 0;

  // If needle is longer than haystack, it can't be found
  if (needle.length > haystack.length) return -1;

  // Loop through the haystack
  for (let i = 0; i <= haystack.length - needle.length; i++) {
      // Check if the substring matches the needle
      if (haystack.substring(i, i + needle.length) === needle) {
          return i; // Return the starting index
      }
  }

  return -1; // Return -1 if needle is not found
};

module.exports = strStr;
