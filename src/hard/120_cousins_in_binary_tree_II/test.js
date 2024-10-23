const { replaceValueInTree, TreeNode } = require('./index');  // Adjust the path to the location of your code

// Utility function to convert an array to a binary tree
const arrayToTree = (arr) => {
    if (!arr.length || arr[0] === null) return null;
    let root = new TreeNode(arr[0]);
    let queue = [root];
    let i = 1;

    while (queue.length > 0 && i < arr.length) {
        let current = queue.shift();
        if (arr[i] !== null) {
            current.left = new TreeNode(arr[i]);
            queue.push(current.left);
        }
        i++;
        if (i < arr.length && arr[i] !== null) {
            current.right = new TreeNode(arr[i]);
            queue.push(current.right);
        }
        i++;
    }

    return root;
};

// Utility function to convert a binary tree to an array (level order traversal)
const treeToArray = (root) => {
    if (!root) return [];
    let result = [];
    let queue = [root];
    while (queue.length > 0) {
        let node = queue.shift();
        if (node) {
            result.push(node.val);
            queue.push(node.left);
            queue.push(node.right);
        } else {
            result.push(null);
        }
    }

    // Remove trailing nulls
    while (result[result.length - 1] === null) {
        result.pop();
    }

    return result;
};

test('replaceValueInTree works for example 1', () => {
    const root = arrayToTree([5, 4, 9, 1, 10, null, 7]);
    const expectedOutput = [0, 0, 0, 7, 7, null, 11];

    const newRoot = replaceValueInTree(root);
    expect(treeToArray(newRoot)).toEqual(expectedOutput);
});

test('replaceValueInTree works for example 2', () => {
    const root = arrayToTree([3, 1, 2]);
    const expectedOutput = [0, 0, 0];

    const newRoot = replaceValueInTree(root);
    expect(treeToArray(newRoot)).toEqual(expectedOutput);
});

test('replaceValueInTree works for a single node', () => {
    const root = arrayToTree([10]);
    const expectedOutput = [0];  // No cousins, so it should be 0

    const newRoot = replaceValueInTree(root);
    expect(treeToArray(newRoot)).toEqual(expectedOutput);
});

test('replaceValueInTree works for a tree with missing children', () => {
    const root = arrayToTree([1, 2, null, 3, 4]);
    const expectedOutput = [0, 0, null, 0, 0];  // No cousins at any level

    const newRoot = replaceValueInTree(root);
    expect(treeToArray(newRoot)).toEqual(expectedOutput);
});
