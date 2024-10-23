const hasCycle = require('./index');

// ListNode definition
function ListNode(val) {
    this.val = val;
    this.next = null;
}

// Function to create a linked list with an optional cycle
function createLinkedList(arr, pos) {
    if (arr.length === 0) return null;

    const head = new ListNode(arr[0]);
    let current = head;
    let cycleNode = null;

    // Build the linked list
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;

        // If the current index is equal to pos, mark this node for cycle
        if (i === pos) {
            cycleNode = current; // Keep track of the node to create a cycle
        }
    }

    // Create a cycle if pos is valid (0-indexed)
    if (pos >= 0) {
        current.next = head; // Create a cycle back to the head node
    }

    return head;
}

// Test cases
describe('hasCycle', () => {
    test('should return true for input [3, 2, 0, -4] with cycle at index 1', () => {
        const head = createLinkedList([3, 2, 0, -4], 1);
        expect(hasCycle(head)).toBe(true);
    });

    test('should return true for input [1, 2] with cycle at index 0', () => {
        const head = createLinkedList([1, 2], 0);
        expect(hasCycle(head)).toBe(true);
    });

    test('should return false for input [1] with no cycle', () => {
        const head = createLinkedList([1], -1);
        expect(hasCycle(head)).toBe(false);
    });

    test('should return false for an empty list', () => {
        expect(hasCycle(null)).toBe(false);
    });
});
