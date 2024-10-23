/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
let getIntersectionNode = function(headA, headB) {
  if (!headA || !headB) return null; // If either list is null, return null

  let pointerA = headA;
  let pointerB = headB;

  // Traverse until both pointers are equal or both are null
  while (pointerA !== pointerB) {
      // If pointerA reaches the end, switch to headB
      pointerA = pointerA ? pointerA.next : headB;

      // If pointerB reaches the end, switch to headA
      pointerB = pointerB ? pointerB.next : headA;
  }

  // Either both pointers are null or pointing at the intersection node
  return pointerA;
};

module.exports = getIntersectionNode;
