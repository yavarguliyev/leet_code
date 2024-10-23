/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
let reverseList = function(head) {
    let prev = null; // Previous node
    let curr = head; // Current node

    while (curr) {
        const nextTemp = curr.next; // Store the next node
        curr.next = prev; // Reverse the link
        prev = curr; // Move prev and curr one step forward
        curr = nextTemp;
    }
    return prev; // New head of the reversed list
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
let reverseListRecursive = function(head) {
    // Base case: if head is null or only one node
    if (!head || !head.next) {
        return head;
    }
    
    // Reverse the rest of the list
    const newHead = reverseListRecursive(head.next);
    
    // Make the current node the next of the new head
    head.next.next = head; // Reverse the link
    head.next = null; // Set the next of the current node to null
    
    return newHead; // Return the new head
};

module.exports = { reverseList, reverseListRecursive };
