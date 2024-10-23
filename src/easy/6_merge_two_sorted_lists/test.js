const mergeTwoLists = require('./index');

test('Example 1: list1 = [1,2,4], list2 = [1,3,4] should return [1,1,2,3,4,4]', () => {
    const list1 = createLinkedList([1, 2, 4]);
    const list2 = createLinkedList([1, 3, 4]);
    const result = mergeTwoLists(list1, list2);
    expect(linkedListToArray(result)).toEqual([1, 1, 2, 3, 4, 4]);
});

test('Example 2: list1 = [], list2 = [] should return []', () => {
    const list1 = createLinkedList([]);
    const list2 = createLinkedList([]);
    const result = mergeTwoLists(list1, list2);
    expect(linkedListToArray(result)).toEqual([]);
});

test('Example 3: list1 = [], list2 = [0] should return [0]', () => {
    const list1 = createLinkedList([]);
    const list2 = createLinkedList([0]);
    const result = mergeTwoLists(list1, list2);
    expect(linkedListToArray(result)).toEqual([0]);
});

// Helper functions to create and convert linked lists
function createLinkedList(arr) {
    let dummy = new ListNode();
    let current = dummy;
    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
}

function linkedListToArray(list) {
    const result = [];
    while (list) {
        result.push(list.val);
        list = list.next;
    }
    return result;
}

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}
