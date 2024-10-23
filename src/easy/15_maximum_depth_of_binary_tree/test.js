// Helper function to create a tree node
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

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

    // Recursively find the depth of the left and right subtree and return the maximum
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

// Unit Tests
describe('maxDepth', () => {
    test('should return 3 for input [3,9,20,null,null,15,7]', () => {
        const root = new TreeNode(3,
            new TreeNode(9),
            new TreeNode(20,
                new TreeNode(15),
                new TreeNode(7)
            )
        );
        expect(maxDepth(root)).toBe(3);
    });

    test('should return 2 for input [1,null,2]', () => {
        const root = new TreeNode(1, null, new TreeNode(2));
        expect(maxDepth(root)).toBe(2);
    });

    test('should return 0 for input []', () => {
        const root = null;
        expect(maxDepth(root)).toBe(0);
    });

    test('should return 1 for input [1]', () => {
        const root = new TreeNode(1);
        expect(maxDepth(root)).toBe(1);
    });

    test('should return 3 for input [1, 2, 3, 4, null, null, 5]', () => {
        const root = new TreeNode(1,
            new TreeNode(2,
                new TreeNode(4),
                null
            ),
            new TreeNode(3,
                null,
                new TreeNode(5)
            )
        );
        expect(maxDepth(root)).toBe(3); // Corrected expectation
    });
});
