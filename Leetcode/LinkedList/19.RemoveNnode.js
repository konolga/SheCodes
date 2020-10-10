/**
 * Given the head of a linked list, remove the nth node from the 
 * end of the list and return its head.
 * 
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
var removeNthFromEnd = function (head, n) {

    //two pointers
    let curr = head;
    let prev = head;

    // On the first pass, we find the list length
    let length = 0;
    while (curr) {
        curr = curr.next;
        length++;
    }
    let count = length - n;
    if (count === 0) return head.next;

    // On the second pass we relink target nodes
    while (prev && count > 1) {
        prev = prev.next;
        count--;
    }
    prev.next = prev.next.next ? prev.next.next : null;
    return head;

};