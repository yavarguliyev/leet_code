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
let isValidBST = function(root) {
    // Helper function to perform the validation
    function validate(node, min, max) {
        // Base case: an empty node is valid
        if (!node) return true;

        // Check the current node's value against the min and max constraints
        if (node.val <= min || node.val >= max) {
            return false;
        }

        // Recursively validate the left and right subtrees
        return validate(node.left, min, node.val) && 
               validate(node.right, node.val, max);
    }

    // Start the recursion with the entire range of valid values
    return validate(root, -Infinity, Infinity);
};

module.exports = isValidBST;
