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
 * @return {number[][]}
 */
let levelOrder = function(root) {
    const result = [];
    if (!root) return result; // If the tree is empty, return an empty array

    const queue = [root]; // Initialize the queue with the root node

    while (queue.length > 0) {
        const levelSize = queue.length; // Get the number of nodes at the current level
        const currentLevel = []; // Array to hold values of the current level

        for (let i = 0; i < levelSize; i++) {
            const currentNode = queue.shift(); // Dequeue the front node
            currentLevel.push(currentNode.val); // Add its value to the current level

            // Enqueue left and right children if they exist
            if (currentNode.left) queue.push(currentNode.left);
            if (currentNode.right) queue.push(currentNode.right);
        }

        result.push(currentLevel); // Add the current level to the result
    }

    return result; // Return the complete level order traversal
};

module.exports = levelOrder;
