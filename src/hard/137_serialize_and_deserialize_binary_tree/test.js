const { TreeNode, serialize, deserialize } = require('./index');

describe('Binary Tree Serialization and Deserialization', () => {
    it('should serialize and deserialize an empty tree', () => {
        const root = null;
        const serialized = serialize(root);
        const deserialized = deserialize(serialized);
        expect(serialized).toBe("null");
        expect(deserialized).toBeNull();
    });

    it('should serialize and deserialize a tree with one node', () => {
        const root = new TreeNode(1);
        const serialized = serialize(root);
        const deserialized = deserialize(serialized);
        expect(serialized).toBe("1,null,null");
        expect(deserialized.val).toBe(1);
        expect(deserialized.left).toBeNull();
        expect(deserialized.right).toBeNull();
    });

    it('should serialize and deserialize a balanced tree', () => {
        const root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        const serialized = serialize(root);
        const deserialized = deserialize(serialized);
        expect(serialized).toBe("1,2,null,null,3,null,null");
        expect(deserialized.val).toBe(1);
        expect(deserialized.left.val).toBe(2);
        expect(deserialized.right.val).toBe(3);
    });

    it('should serialize and deserialize an unbalanced tree', () => {
        const root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.left.left = new TreeNode(3);
        const serialized = serialize(root);
        const deserialized = deserialize(serialized);
        expect(serialized).toBe("1,2,3,null,null,null,null");
        expect(deserialized.val).toBe(1);
        expect(deserialized.left.val).toBe(2);
        expect(deserialized.left.left.val).toBe(3);
    });

    it('should serialize and deserialize a complete binary tree', () => {
        const root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.left.left = new TreeNode(4);
        root.left.right = new TreeNode(5);
        root.right.left = new TreeNode(6);
        root.right.right = new TreeNode(7);
        const serialized = serialize(root);
        const deserialized = deserialize(serialized);
        expect(serialized).toBe("1,2,4,null,null,5,null,null,3,6,null,null,7,null,null");
        expect(deserialized.val).toBe(1);
        expect(deserialized.left.val).toBe(2);
        expect(deserialized.right.val).toBe(3);
        expect(deserialized.left.left.val).toBe(4);
        expect(deserialized.right.right.val).toBe(7);
    });
});
