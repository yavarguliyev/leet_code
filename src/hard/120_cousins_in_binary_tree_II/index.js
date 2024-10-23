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
 * @return {TreeNode}
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

let replaceValueInTree = function(root) {
    if (!root) return root;

    // BFS queue to process nodes level by level
    let queue = [root];
    root.val = 0;  // Root node has no cousins

    while (queue.length > 0) {
        let levelSize = queue.length;
        let totalSum = 0;
        let levelNodes = [];

        // Calculate total sum of current level and store nodes
        for (let i = 0; i < levelSize; i++) {
            let node = queue[i];
            totalSum += (node.left ? node.left.val : 0) + (node.right ? node.right.val : 0);
            levelNodes.push(node);
        }

        // Update each node's value to the sum of cousins
        for (let i = 0; i < levelSize; i++) {
            let node = levelNodes[i];
            let sumOfCousins = totalSum;

            // Deduct the values of node's children (since they are not cousins)
            if (node.left) sumOfCousins -= node.left.val;
            if (node.right) sumOfCousins -= node.right.val;

            // Assign the sum of cousins to the children
            if (node.left) {
                node.left.val = sumOfCousins;
                queue.push(node.left);
            }
            if (node.right) {
                node.right.val = sumOfCousins;
                queue.push(node.right);
            }
        }

        // Move to the next level
        queue = queue.slice(levelSize);
    }

    return root;
};

module.exports = { TreeNode, replaceValueInTree };