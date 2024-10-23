/**
 * @param {number[]} nums
 * @return {boolean}
 */
let canJump = function(nums) {
    let maxReach = 0;

    for (let i = 0; i < nums.length; i++) {
        // If current index is greater than the max reachable index, we can't move further
        if (i > maxReach) {
            return false;
        }
        // Update the max reachable index
        maxReach = Math.max(maxReach, i + nums[i]);
        
        // If we can reach or exceed the last index, return true
        if (maxReach >= nums.length - 1) {
            return true;
        }
    }

    return true; // If we finish the loop, we can reach the last index
};

module.exports = canJump;
