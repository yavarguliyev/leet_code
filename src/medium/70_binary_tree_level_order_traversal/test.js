const levelOrder = require('./index');

// Helper function to create a tree node
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

describe('Level Order Traversal of Binary Tree', () => {
    test('should return level order traversal for a complete tree', () => {
        const root = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
        expect(levelOrder(root)).toEqual([[3], [9, 20], [15, 7]]);
    });

    test('should return level order traversal for a single-node tree', () => {
        const root = new TreeNode(1);
        expect(levelOrder(root)).toEqual([[1]]);
    });

    test('should return an empty array for an empty tree', () => {
        const root = null;
        expect(levelOrder(root)).toEqual([]);
    });

    test('should return level order traversal for a left-skewed tree', () => {
        const root = new TreeNode(1, new TreeNode(2, new TreeNode(3)));
        expect(levelOrder(root)).toEqual([[1], [2], [3]]);
    });

    test('should return level order traversal for a right-skewed tree', () => {
        const root = new TreeNode(1, null, new TreeNode(2, null, new TreeNode(3)));
        expect(levelOrder(root)).toEqual([[1], [2], [3]]);
    });
});