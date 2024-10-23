/**
 * @param {number[]} nums
 * @return {number}
 */
let maxSubArray = function(nums) {
    return maxSubArrayHelper(nums, 0, nums.length - 1);
};

function maxSubArrayHelper(nums, left, right) {
    if (left === right) {
        return nums[left];
    }

    const mid = Math.floor((left + right) / 2);
    
    // Max subarray sum in the left half
    const leftMax = maxSubArrayHelper(nums, left, mid);
    
    // Max subarray sum in the right half
    const rightMax = maxSubArrayHelper(nums, mid + 1, right);
    
    // Max subarray sum that crosses the midpoint
    const crossMax = findMaxCrossingSubarray(nums, left, mid, right);
    
    // Return the maximum of the three
    return Math.max(leftMax, rightMax, crossMax);
}

function findMaxCrossingSubarray(nums, left, mid, right) {
    let leftSum = -Infinity;
    let sum = 0;

    for (let i = mid; i >= left; i--) {
        sum += nums[i];
        leftSum = Math.max(leftSum, sum);
    }

    let rightSum = -Infinity;
    sum = 0;

    for (let i = mid + 1; i <= right; i++) {
        sum += nums[i];
        rightSum = Math.max(rightSum, sum);
    }

    return leftSum + rightSum;
}

module.exports = maxSubArray;
