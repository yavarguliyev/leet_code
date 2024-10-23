/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
let sortedArrayToBST = function(nums) {
    // Base case: if the array is empty, return null
    if (nums.length === 0) {
        return null;
    }

    // Find the middle index
    const mid = Math.floor(nums.length / 2);

    // Create the root node with the middle element
    const root = new TreeNode(nums[mid]);

    // Recursively build the left and right subtrees
    root.left = sortedArrayToBST(nums.slice(0, mid)); // Left half
    root.right = sortedArrayToBST(nums.slice(mid + 1)); // Right half

    return root;
};

module.exports = sortedArrayToBST;
