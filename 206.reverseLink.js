/*
 * 反转一个单链表。
 * 
 * 示例:
 * 
 * 输入: 1->2->3->4->5->NULL
 * 输出: 5->4->3->2->1->NULL
 * 
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
var reverseList = function(head) {
  if (!head || !head.next) return head

  let next = head.next
  head.next = null

  while (next) {
    const tmp = next.next
    next.next = head
    head = next
    next = tmp
  }

  return head
};
