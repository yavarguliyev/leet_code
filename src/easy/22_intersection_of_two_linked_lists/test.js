const getIntersectionNode = require('./index');

// ListNode definition
function ListNode(val) {
    this.val = val;
    this.next = null;
}

// Helper function to create a linked list from an array
function createLinkedList(arr) {
    if (arr.length === 0) return null;
    const head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

// Function to manually create an intersection between two lists
function createIntersection(listA, listB, skipA, skipB) {
    let intersectionNode = listA;
    for (let i = 0; i < skipA; i++) {
        intersectionNode = intersectionNode.next;
    }

    let currentB = listB;
    for (let i = 0; i < skipB - 1; i++) {
        if (currentB) currentB = currentB.next;
    }

    if (currentB) {
        currentB.next = intersectionNode; // Create intersection
    }

    return listB;
}

describe('getIntersectionNode', () => {
    test('should return the intersected node for input [4,1,8,4,5] and [5,6,1,8,4,5]', () => {
        const listA = createLinkedList([4, 1, 8, 4, 5]);
        const listB = createLinkedList([5, 6, 1]);
        createIntersection(listA, listB, 2, 1); // Create intersection at value 8

        const intersectionNode = getIntersectionNode(listA, listB);
        expect(intersectionNode.val).toBe(8); // Expect the intersected value to be 8
    });

    test('should return the intersected node for input [1,9,1,2,4] and [3,2,4]', () => {
        const listA = createLinkedList([1, 9, 1, 2, 4]);
        const listB = createLinkedList([3, 2, 4]);
        createIntersection(listA, listB, 3, 1); // Create intersection at value 2

        const intersectionNode = getIntersectionNode(listA, listB);
        expect(intersectionNode.val).toBe(2); // Expect the intersected value to be 2
    });

    test('should return null when there is no intersection', () => {
        const listA = createLinkedList([2, 6, 4]);
        const listB = createLinkedList([1, 5]);

        const intersectionNode = getIntersectionNode(listA, listB);
        expect(intersectionNode).toBeNull(); // Expect no intersection
    });

    test('should return null for two empty lists', () => {
        const intersectionNode = getIntersectionNode(null, null);
        expect(intersectionNode).toBeNull(); // Expect no intersection
    });

    test('should return null when one list is empty', () => {
        const listA = createLinkedList([1, 2, 3]);
        const intersectionNode = getIntersectionNode(listA, null);
        expect(intersectionNode).toBeNull(); // Expect no intersection
    });
});
