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
let maxDepth = function(root) {
  if (!root) return 0; // An empty tree has a depth of 0

  const queue = [root];
  let depth = 0;

  while (queue.length > 0) {
      const levelSize = queue.length; // Number of nodes at the current level
      depth++; // Increase the depth for each level

      // Process all nodes at the current level
      for (let i = 0; i < levelSize; i++) {
          const currentNode = queue.shift(); // Get the current node
          // Add child nodes to the queue for the next level
          if (currentNode.left) queue.push(currentNode.left);
          if (currentNode.right) queue.push(currentNode.right);
      }
  }

  return depth;
};

module.exports = maxDepth;
