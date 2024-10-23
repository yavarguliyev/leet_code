/**
 * @param {string} s
 * @return {number}
 */
let minAddToMakeValid = function(s) {
  let open_needed = 0;  // To track the number of '(' needed
  let close_needed = 0; // To track the number of ')' needed
  
  for (let char of s) {
      if (char === '(') {
          // We have an unbalanced opening parenthesis, we need a closing one
          close_needed++;
      } else if (char === ')') {
          // Check if there's already an unmatched '(' to balance this ')'
          if (close_needed > 0) {
              close_needed--; // Balance an opening parenthesis
          } else {
              open_needed++; // No matching '(' so we need an opening one
          }
      }
  }
  
  // The total number of insertions needed is the sum of unbalanced '(' and ')'
  return open_needed + close_needed;
};

module.exports = minAddToMakeValid;
