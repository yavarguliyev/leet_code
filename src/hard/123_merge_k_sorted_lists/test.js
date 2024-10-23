const { ListNode, mergeKLists } = require('./index');

// Helper function to create a linked list from an array
function createLinkedList(arr) {
    const dummy = new ListNode(0);
    let current = dummy;
    for (const val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
}

// Helper function to convert a linked list to an array
function linkedListToArray(head) {
    const result = [];
    while (head) {
        result.push(head.val);
        head = head.next;
    }
    return result;
}

describe('mergeKLists', () => {
    test('should merge multiple sorted linked lists', () => {
        const lists = [
            createLinkedList([1, 4, 5]),
            createLinkedList([1, 3, 4]),
            createLinkedList([2, 6])
        ];
        const mergedList = mergeKLists(lists);
        expect(linkedListToArray(mergedList)).toEqual([1, 1, 2, 3, 4, 4, 5, 6]);
    });

    test('should handle an empty list', () => {
        const lists = [];
        const mergedList = mergeKLists(lists);
        expect(mergedList).toBeNull();
    });

    test('should handle lists with one empty list', () => {
        const lists = [
            createLinkedList([1, 2, 3]),
            null
        ];
        const mergedList = mergeKLists(lists);
        expect(linkedListToArray(mergedList)).toEqual([1, 2, 3]);
    });

    test('should handle lists with all empty lists', () => {
        const lists = [null, null, null];
        const mergedList = mergeKLists(lists);
        expect(mergedList).toBeNull();
    });

    test('should handle a single list', () => {
        const lists = [createLinkedList([1, 2, 3])];
        const mergedList = mergeKLists(lists);
        expect(linkedListToArray(mergedList)).toEqual([1, 2, 3]);
    });
});
