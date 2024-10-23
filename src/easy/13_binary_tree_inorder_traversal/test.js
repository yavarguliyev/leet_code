const inorderTraversal = require('./index');

function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

// Jest unit tests
describe('inorderTraversal', () => {
    test('should return [1, 3, 2] for input [1, null, 2, 3]', () => {
        const root = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)));
        expect(inorderTraversal(root)).toEqual([1, 3, 2]);
    });

    test('should return [4, 2, 6, 5, 7, 1, 3, 9] for input [1, 2, 3, 4, 5, null, null, 6, 7, 9]', () => {
        const root = new TreeNode(1,
            new TreeNode(2,
                new TreeNode(4),
                new TreeNode(5,
                    new TreeNode(6),
                    new TreeNode(7)
                )
            ),
            new TreeNode(3,
                null,
                new TreeNode(9)
            )
        );
        expect(inorderTraversal(root)).toEqual([4, 2, 6, 5, 7, 1, 3, 9]);
    });

    test('should return [] for input []', () => {
        const root = null;
        expect(inorderTraversal(root)).toEqual([]);
    });

    test('should return [1] for input [1]', () => {
        const root = new TreeNode(1);
        expect(inorderTraversal(root)).toEqual([1]);
    });
});
