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
//Reverse a singly linked list.
//1->2->3->4->5->NULL
//NULL<-5<-4<-3<-2<-1
//NULL<-5<-4<-3<-2 cur.next=prev: 1->NULL
//NULL<-5<-4<-3 cur.next=prev: 2->1->NULL
var reverseList = function(head) {
    
    let prev = null;
    let current = head;    
    
    while(current != null){
        let temp = current.next;
        current.next = prev;
        prev = current;
        current = temp;
    }
    
    return prev;
};