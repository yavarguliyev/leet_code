const { removeNthFromEnd, ListNode } = require('./index');

describe('removeNthFromEnd', () => {
    // Helper function to convert array to linked list
    const arrayToLinkedList = (arr) => {
        let dummy = new ListNode(0);
        let current = dummy;
        for (let num of arr) {
            current.next = new ListNode(num);
            current = current.next;
        }
        return dummy.next;
    };

    // Helper function to convert linked list to array
    const linkedListToArray = (head) => {
        let result = [];
        while (head) {
            result.push(head.val);
            head = head.next;
        }
        return result;
    };

    test('should remove the 2nd node from the end of [1,2,3,4,5]', () => {
        let head = arrayToLinkedList([1, 2, 3, 4, 5]);
        let result = removeNthFromEnd(head, 2);
        expect(linkedListToArray(result)).toEqual([1, 2, 3, 5]);
    });

    test('should remove the 1st node from a single-node list [1]', () => {
        let head = arrayToLinkedList([1]);
        let result = removeNthFromEnd(head, 1);
        expect(linkedListToArray(result)).toEqual([]);
    });

    test('should remove the 1st node from the end of [1,2]', () => {
        let head = arrayToLinkedList([1, 2]);
        let result = removeNthFromEnd(head, 1);
        expect(linkedListToArray(result)).toEqual([1]);
    });

    test('should remove the 3rd node from the end of [1,2,3,4,5]', () => {
        let head = arrayToLinkedList([1, 2, 3, 4, 5]);
        let result = removeNthFromEnd(head, 3);
        expect(linkedListToArray(result)).toEqual([1, 2, 4, 5]);
    });
});
