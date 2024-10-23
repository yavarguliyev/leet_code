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
 * @return {boolean}
 */
let isSymmetric = function(root) {
  if (!root) return true; // An empty tree is symmetric.

  function isMirror(left, right) {
      if (!left && !right) return true; // Both nodes are null
      if (!left || !right) return false; // One of the nodes is null
      return (left.val === right.val) &&
          isMirror(left.left, right.right) && // Check outer subtrees
          isMirror(left.right, right.left); // Check inner subtrees
  }

  return isMirror(root.left, root.right);
};

module.exports = isSymmetric;
