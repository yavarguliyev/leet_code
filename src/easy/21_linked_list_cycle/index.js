/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
let hasCycle = function(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
      slow = slow.next;        // Move slow pointer by 1
      fast = fast.next.next;   // Move fast pointer by 2

      if (slow === fast) {     // If they meet, there is a cycle
          return true;
      }
  }
  return false; // If we reach the end, there is no cycle
};

module.exports = hasCycle;
