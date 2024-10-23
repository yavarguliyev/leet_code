/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        // Check if we have found the target
        if (nums[mid] === target) {
            return mid;
        }
        
        // Determine which half is sorted
        if (nums[left] <= nums[mid]) {  // Left half is sorted
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;  // Target is in the left half
            } else {
                left = mid + 1;   // Target is in the right half
            }
        } else {  // Right half is sorted
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;   // Target is in the right half
            } else {
                right = mid - 1;  // Target is in the left half
            }
        }
    }
    
    // Target not found
    return -1;
};

module.exports = search;
