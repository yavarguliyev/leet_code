/**
 * @param {string} s
 * @return {boolean}
 */
let isPalindrome = function(s) {
  // Normalize the string by converting to lowercase and removing non-alphanumeric characters
  const cleanedString = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  // Check if the cleaned string is the same as its reverse
  const reversedString = cleanedString.split('').reverse().join('');
  
  return cleanedString === reversedString;
};

module.exports = isPalindrome;
