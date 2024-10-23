/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let threeSum = function(nums) {
    const result = [];
    
    // Step 1: Sort the array
    nums.sort((a, b) => a - b);
    
    // Step 2: Iterate through the array
    for (let i = 0; i < nums.length - 2; i++) {
        // If the current value is the same as the previous one, skip it to avoid duplicates
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        
        // Step 3: Set up two pointers
        let left = i + 1;
        let right = nums.length - 1;
        
        // Step 4: Find pairs using two pointers
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            
            if (sum === 0) {
                // Step 5: Found a triplet
                result.push([nums[i], nums[left], nums[right]]);
                
                // Skip duplicates for left and right
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;
                
                // Move pointers after finding a valid triplet
                left++;
                right--;
            } else if (sum < 0) {
                // Move the left pointer to increase the sum
                left++;
            } else {
                // Move the right pointer to decrease the sum
                right--;
            }
        }
    }
    
    return result;
};

module.exports = threeSum;
