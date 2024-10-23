const isValidBST = require('./index');

// Helper function to create a tree node
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

describe('Binary Search Tree Validation', () => {
    test('should return true for a valid BST', () => {
        const root = new TreeNode(2, new TreeNode(1), new TreeNode(3));
        expect(isValidBST(root)).toBe(true);
    });

    test('should return false for an invalid BST', () => {
        const root = new TreeNode(5, new TreeNode(1), new TreeNode(4, new TreeNode(3), new TreeNode(6)));
        expect(isValidBST(root)).toBe(false);
    });

    test('should return true for a single-node tree', () => {
        const root = new TreeNode(1);
        expect(isValidBST(root)).toBe(true);
    });

    test('should return true for a valid left-skewed BST', () => {
        const root = new TreeNode(3, new TreeNode(2, new TreeNode(1)));
        expect(isValidBST(root)).toBe(true);
    });

    test('should return true for a valid right-skewed BST', () => {
        const root = new TreeNode(1, null, new TreeNode(2, null, new TreeNode(3)));
        expect(isValidBST(root)).toBe(true);
    });

    test('should return false for a tree with duplicate values', () => {
        const root = new TreeNode(2, new TreeNode(2), new TreeNode(3));
        expect(isValidBST(root)).toBe(false);
    });

    test('should return false for a tree where a right child is less than its parent', () => {
        const root = new TreeNode(10, new TreeNode(5), new TreeNode(1));
        expect(isValidBST(root)).toBe(false);
    });
});
