/**
 * @param {string[]} strs
 * @return {string}
 */
let longestCommonPrefix = function(strs) {
    if (strs.length === 0) return "";
    
    // Assume the first string is the prefix
    let prefix = strs[0];
    
    // Iterate through the array
    for (let i = 1; i < strs.length; i++) {
        // Reduce the prefix while it doesn't match the start of the string
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, prefix.length - 1);
            if (prefix === "") return "";
        }
    }
    
    return prefix;
};

module.exports = longestCommonPrefix;
