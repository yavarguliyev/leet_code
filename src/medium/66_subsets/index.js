/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let subsets = function(nums) {
    const result = [];
    
    const backtrack = (start, currentSubset) => {
        // Add the current subset to the result
        result.push([...currentSubset]);
        
        // Explore further elements to create subsets
        for (let i = start; i < nums.length; i++) {
            currentSubset.push(nums[i]); // Include the current element
            backtrack(i + 1, currentSubset); // Move to the next element
            currentSubset.pop(); // Exclude the current element (backtrack)
        }
    };
    
    backtrack(0, []);
    return result;
};

module.exports = subsets;
