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
 * @return {boolean}
 */
let isSymmetric = function(root) {
    if (!root) return true; // An empty tree is symmetric.

    const queue = [root.left, root.right]; // Start with the left and right child.

    while (queue.length > 0) {
        const left = queue.shift(); // Get the left node
        const right = queue.shift(); // Get the right node

        if (!left && !right) continue; // Both are null
        if (!left || !right) return false; // One of them is null
        if (left.val !== right.val) return false; // Values are not equal

        // Enqueue the children in the order that reflects symmetry
        queue.push(left.left);
        queue.push(right.right);
        queue.push(left.right);
        queue.push(right.left);
    }

    return true;
};

// Unit Tests
describe('isSymmetric', () => {
    test('should return true for input [1, 2, 2, 3, 4, 4, 3]', () => {
        const root = new TreeNode(1,
            new TreeNode(2,
                new TreeNode(3),
                new TreeNode(4)
            ),
            new TreeNode(2,
                new TreeNode(4),
                new TreeNode(3)
            )
        );
        expect(isSymmetric(root)).toBe(true);
    });

    test('should return false for input [1, 2, 2, null, 3, null, 3]', () => {
        const root = new TreeNode(1,
            new TreeNode(2,
                null,
                new TreeNode(3)
            ),
            new TreeNode(2,
                null,
                new TreeNode(3)
            )
        );
        expect(isSymmetric(root)).toBe(false);
    });

    test('should return true for input [1]', () => {
        const root = new TreeNode(1);
        expect(isSymmetric(root)).toBe(true);
    });

    test('should return true for input []', () => {
        const root = null;
        expect(isSymmetric(root)).toBe(true);
    });
});
