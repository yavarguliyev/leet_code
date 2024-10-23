/**
 * @param {string[]} strs
 * @return {string[][]}
 */
let groupAnagrams = function(strs) {
    const anagrams = {};

    for (const str of strs) {
        // Sort the string and use it as a key
        const sortedStr = str.split('').sort().join('');
        
        // If the key doesn't exist, create an array for it
        if (!anagrams[sortedStr]) {
            anagrams[sortedStr] = [];
        }
        
        // Push the original string to the corresponding array
        anagrams[sortedStr].push(str);
    }

    // Return the values of the hash map as an array
    return Object.values(anagrams);
};

module.exports = groupAnagrams;
