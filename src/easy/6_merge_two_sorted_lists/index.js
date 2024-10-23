function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
let mergeTwoLists = function(list1, list2) {
  // Create a dummy node to act as the head of the new merged list
  let dummy = new ListNode();
  let current = dummy;

  // While both lists have nodes left to process
  while (list1 !== null && list2 !== null) {
      // Compare the current nodes and choose the smaller one
      if (list1.val <= list2.val) {
          current.next = list1;  // Append list1 node to merged list
          list1 = list1.next;    // Move to the next node in list1
      } else {
          current.next = list2;  // Append list2 node to merged list
          list2 = list2.next;    // Move to the next node in list2
      }
      current = current.next;  // Move the current pointer in the merged list
  }

  // If any nodes are left in list1 or list2, append them to the merged list
  current.next = list1 !== null ? list1 : list2;

  // Return the merged list, which starts after the dummy node
  return dummy.next;
};

module.exports = mergeTwoLists;
