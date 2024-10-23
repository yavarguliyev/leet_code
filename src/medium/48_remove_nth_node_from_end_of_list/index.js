/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
let removeNthFromEnd = function(head, n) {
    // Create a dummy node that points to the head
    let dummy = new ListNode(0);
    dummy.next = head;
    
    // Initialize two pointers, fast and slow, at the dummy node
    let fast = dummy;
    let slow = dummy;
    
    // Move the fast pointer `n` steps ahead
    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }
    
    // Move both fast and slow pointers until fast reaches the end
    while (fast.next !== null) {
        fast = fast.next;
        slow = slow.next;
    }
    
    // Remove the nth node from the end by adjusting the slow pointer's next
    slow.next = slow.next.next;
    
    // Return the head of the modified list
    return dummy.next;
};

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

module.exports = { removeNthFromEnd, ListNode };
