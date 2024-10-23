/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let permute = function(nums) {
    const result = [];
    
    // Helper function for backtracking
    const backtrack = (current, remaining) => {
        // If there are no more remaining numbers, we found a permutation
        if (remaining.length === 0) {
            result.push(current);
            return;
        }
        
        // Iterate through the remaining numbers
        for (let i = 0; i < remaining.length; i++) {
            // Choose the current number and create a new list for remaining
            const newCurrent = [...current, remaining[i]];
            const newRemaining = [...remaining.slice(0, i), ...remaining.slice(i + 1)];
            
            // Recurse with the new current and remaining
            backtrack(newCurrent, newRemaining);
        }
    };

    // Start the backtracking with an empty current permutation and the full nums array as remaining
    backtrack([], nums);
    
    return result;
};

module.exports = permute;
