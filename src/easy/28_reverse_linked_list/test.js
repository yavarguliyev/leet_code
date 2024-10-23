const { reverseList, reverseListRecursive } = require('./index');

// ListNode definition
function ListNode(val) {
    this.val = val;
    this.next = null;
}

// Helper function to create a linked list from an array
function createLinkedList(arr) {
    const dummyHead = new ListNode(0);
    let current = dummyHead;

    for (const val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummyHead.next; // Return the actual head
}

// Helper function to convert linked list to array for easy comparison
function linkedListToArray(head) {
    const result = [];
    let current = head;

    while (current) {
        result.push(current.val);
        current = current.next;
    }
    return result;
}

describe('Reverse Linked List', () => {
    test('should reverse the linked list [1,2,3,4,5]', () => {
        const head = createLinkedList([1, 2, 3, 4, 5]);
        const result = reverseList(head);
        expect(linkedListToArray(result)).toEqual([5, 4, 3, 2, 1]);
    });

    test('should reverse the linked list [1,2]', () => {
        const head = createLinkedList([1, 2]);
        const result = reverseList(head);
        expect(linkedListToArray(result)).toEqual([2, 1]);
    });

    test('should return empty list for empty input', () => {
        const head = createLinkedList([]);
        const result = reverseList(head);
        expect(linkedListToArray(result)).toEqual([]);
    });

    test('should reverse the linked list using recursion', () => {
        const head = createLinkedList([1, 2, 3, 4, 5]);
        const result = reverseListRecursive(head);
        expect(linkedListToArray(result)).toEqual([5, 4, 3, 2, 1]);
    });
});
