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
 * @return {number[]}
 */
let inorderTraversal = function(root) {
    const result = [];
    const stack = [];
    let current = root;

    while (current || stack.length > 0) {
        // Traverse to the leftmost node
        while (current) {
            stack.push(current);
            current = current.left;
        }
        // Visit the node
        current = stack.pop();
        result.push(current.val);
        // Move to the right subtree
        current = current.right;
    }

    return result;
};

module.exports = inorderTraversal;
