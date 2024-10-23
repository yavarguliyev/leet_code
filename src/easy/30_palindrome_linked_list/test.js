const isPalindrome = require('./index');

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

describe('Palindrome Linked List', () => {
    test('should return true for input [1, 2, 2, 1]', () => {
        const head = createLinkedList([1, 2, 2, 1]);
        expect(isPalindrome(head)).toBe(true);
    });

    test('should return false for input [1, 2]', () => {
        const head = createLinkedList([1, 2]);
        expect(isPalindrome(head)).toBe(false);
    });

    test('should return true for input [1]', () => {
        const head = createLinkedList([1]);
        expect(isPalindrome(head)).toBe(true);
    });

    test('should return true for input [0, 0]', () => {
        const head = createLinkedList([0, 0]);
        expect(isPalindrome(head)).toBe(true);
    });

    test('should return false for input [1, 2, 3]', () => {
        const head = createLinkedList([1, 2, 3]);
        expect(isPalindrome(head)).toBe(false);
    });
});
