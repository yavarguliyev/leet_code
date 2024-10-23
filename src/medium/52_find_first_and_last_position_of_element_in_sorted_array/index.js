/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let searchRange = function(nums, target) {
    const result = [-1, -1];
    
    // Helper function to find the left bound
    const findLeft = (nums, target) => {
        let left = 0;
        let right = nums.length - 1;
        
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        // Check if left is within bounds and matches the target
        if (left < nums.length && nums[left] === target) {
            return left;
        }
        return -1;
    };
    
    // Helper function to find the right bound
    const findRight = (nums, target) => {
        let left = 0;
        let right = nums.length - 1;
        
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (nums[mid] <= target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        // Check if right is within bounds and matches the target
        if (right >= 0 && nums[right] === target) {
            return right;
        }
        return -1;
    };
    
    // Search for left and right bounds
    result[0] = findLeft(nums, target);
    if (result[0] !== -1) {  // Only search for right if left is found
        result[1] = findRight(nums, target);
    }
    
    return result;
};

module.exports = searchRange;
