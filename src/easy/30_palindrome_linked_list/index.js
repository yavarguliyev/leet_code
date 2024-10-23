/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
let isPalindrome = function(head) {
    if (!head || !head.next) return true; // A single node or empty list is a palindrome

    let slow = head;
    let fast = head;

    // Step 1: Find the middle of the linked list
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Step 2: Reverse the second half of the linked list
    let prev = null;
    while (slow) {
        const next = slow.next;
        slow.next = prev;
        prev = slow;
        slow = next;
    }

    // Step 3: Compare the first half and the reversed second half
    let left = head;
    let right = prev; // This is the head of the reversed second half
    while (right) {
        if (left.val !== right.val) {
            return false; // Not a palindrome
        }
        left = left.next;
        right = right.next;
    }

    return true; // It is a palindrome
};


module.exports = isPalindrome;
