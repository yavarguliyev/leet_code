/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
let maxPathSum = function(root) {
  let maxSum = -Infinity; // Initialize to the smallest possible value

  // Helper function to perform DFS and compute maximum path sums
  const dfs = (node) => {
      if (!node) return 0; // If the node is null, return 0

      // Recursively get the maximum path sum of left and right subtrees
      let left = Math.max(dfs(node.left), 0); // Only add positive contributions
      let right = Math.max(dfs(node.right), 0); // Only add positive contributions

      // Calculate the maximum path sum through the current node
      const currentPathSum = node.val + left + right;

      // Update the global maximum path sum
      maxSum = Math.max(maxSum, currentPathSum);

      // Return the maximum contribution of this node to the parent path
      return node.val + Math.max(left, right);
  };

  dfs(root); // Start DFS from the root
  return maxSum; // Return the maximum path sum found
};

module.exports = maxPathSum;