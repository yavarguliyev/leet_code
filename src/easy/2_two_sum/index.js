/**
 * @param {string} s
 * @return {number}
 */
let twoSum = function(nums, target) {
    const map = new Map(); // To store the indices of the numbers we have seen
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        // If the complement exists in the map, return the indices
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        
        // Otherwise, add the current number and its index to the map
        map.set(nums[i], i);
    }
};

module.exports = twoSum;
