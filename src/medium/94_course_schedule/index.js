/**
 * @param {number[]} height
 * @return {number}
 */
let maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;

    while (left < right) {
        // Calculate the width and the height
        const width = right - left;
        const h = Math.min(height[left], height[right]);
        const area = width * h;

        // Update maxArea if the current area is larger
        maxArea = Math.max(maxArea, area);

        // Move the pointer pointing to the shorter line
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
};

module.exports = maxArea;
