/**
 * @param {number[]} height
 * @return {number}
 */
let trap = function(height) {
  if (height.length === 0) return 0; // Handle empty input

  let left = 0;
  let right = height.length - 1;
  let leftMax = height[left];
  let rightMax = height[right];
  let waterTrapped = 0;

  while (left < right) {
      if (leftMax < rightMax) {
          left++; // Move left pointer
          leftMax = Math.max(leftMax, height[left]); // Update left max height
          waterTrapped += leftMax - height[left]; // Calculate water trapped
      } else {
          right--; // Move right pointer
          rightMax = Math.max(rightMax, height[right]); // Update right max height
          waterTrapped += rightMax - height[right]; // Calculate water trapped
      }
  }

  return waterTrapped;
};

module.exports = trap;