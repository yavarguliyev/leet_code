/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

// Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    if (!root) return "null"; // Base case for null nodes

    // Pre-order traversal: root, left, right
    const leftSerialized = serialize(root.left);
    const rightSerialized = serialize(root.right);
    
    return `${root.val},${leftSerialized},${rightSerialized}`; // Concatenate with commas
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    const nodes = data.split(","); // Split the string by commas
    let index = 0;

    const buildTree = () => {
        if (nodes[index] === "null") {
            index++; // Skip over "null"
            return null; // Return null for empty nodes
        }

        const node = new TreeNode(parseInt(nodes[index++])); // Create a new node
        node.left = buildTree(); // Recur for left subtree
        node.right = buildTree(); // Recur for right subtree
        return node; // Return the constructed node
    };

    return buildTree(); // Start building the tree
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
*/

module.exports = { TreeNode, serialize, deserialize };