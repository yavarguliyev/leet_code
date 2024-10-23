const maxPathSum = require('./index');

// Definition for a binary tree node
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

describe('Maximum Path Sum in Binary Tree', () => {
    test('Example 1', () => {
        const root = new TreeNode(1, new TreeNode(2), new TreeNode(3));
        expect(maxPathSum(root)).toBe(6);
    });

    test('Example 2', () => {
        const root = new TreeNode(-10, 
            new TreeNode(9), 
            new TreeNode(20, new TreeNode(15), new TreeNode(7))
        );
        expect(maxPathSum(root)).toBe(42);
    });

    test('Single node tree', () => {
        const root = new TreeNode(5);
        expect(maxPathSum(root)).toBe(5);
    });

    test('All negative values', () => {
        const root = new TreeNode(-3, new TreeNode(-2), new TreeNode(-1));
        expect(maxPathSum(root)).toBe(-1);
    });

    test('Mixed values', () => {
        const root = new TreeNode(1, 
            new TreeNode(2, new TreeNode(3), null), 
            new TreeNode(4)
        );
        expect(maxPathSum(root)).toBe(10); // Path: 3 -> 2 -> 1 -> 4
    });
});
