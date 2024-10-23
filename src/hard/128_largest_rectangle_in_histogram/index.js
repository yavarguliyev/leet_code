/**
 * @param {number[]} heights
 * @return {number}
 */
let largestRectangleArea = function(heights) {
  let maxArea = 0;
  const stack = []; // Stack to keep track of the indices of the histogram bars

  for (let i = 0; i <= heights.length; i++) {
      // We add a height of 0 at the end to ensure we pop all remaining bars
      const currentHeight = i === heights.length ? 0 : heights[i];

      while (stack.length > 0 && currentHeight < heights[stack[stack.length - 1]]) {
          const topIndex = stack.pop();
          const height = heights[topIndex];
          const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1; // Calculate width
          maxArea = Math.max(maxArea, height * width); // Update max area
      }
      
      stack.push(i); // Push current index to the stack
  }

  return maxArea;
};

module.exports = largestRectangleArea;