// TreeNode definition
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

// Function to convert sorted array to BST
var sortedArrayToBST = function(nums) {
    if (nums.length === 0) {
        return null;
    }
    
    const mid = Math.floor(nums.length / 2);
    const root = new TreeNode(nums[mid]);
    root.left = sortedArrayToBST(nums.slice(0, mid));
    root.right = sortedArrayToBST(nums.slice(mid + 1));
    
    return root;
};

// Helper function to perform in-order traversal of the BST
function inorderTraversal(root, result = []) {
    if (root !== null) {
        inorderTraversal(root.left, result);
        result.push(root.val);
        inorderTraversal(root.right, result);
    }
    return result;
}

// Jest unit tests
describe('sortedArrayToBST', () => {
    test('should convert [-10, -3, 0, 5, 9] to a height-balanced BST', () => {
        const nums = [-10, -3, 0, 5, 9];
        const bst = sortedArrayToBST(nums);
        const result = inorderTraversal(bst);
        expect(result).toEqual([-10, -3, 0, 5, 9]);
    });

    test('should convert [1, 3] to a height-balanced BST', () => {
        const nums = [1, 3];
        const bst = sortedArrayToBST(nums);
        const result = inorderTraversal(bst);
        expect(result).toEqual([1, 3]);
    });

    test('should convert [0] to a height-balanced BST', () => {
        const nums = [0];
        const bst = sortedArrayToBST(nums);
        const result = inorderTraversal(bst);
        expect(result).toEqual([0]);
    });

    test('should convert [-1, 0, 1] to a height-balanced BST', () => {
        const nums = [-1, 0, 1];
        const bst = sortedArrayToBST(nums);
        const result = inorderTraversal(bst);
        expect(result).toEqual([-1, 0, 1]);
    });

    test('should convert an empty array to null', () => {
        const nums = [];
        const bst = sortedArrayToBST(nums);
        expect(bst).toBeNull();
    });
});
