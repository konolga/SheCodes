/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int val=0, ListNode next=null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

//1->2->3->4->5->NULL
//NULL<-5<-4<-3<-2<-1
//NULL<-5<-4<-3<-2 cur.next=prev: 1->NULL
//NULL<-5<-4<-3 cur.next=prev: 2->1->NULL

public class Solution {
    public ListNode ReverseList(ListNode head) {
        
        ListNode previous = null;
        ListNode current = head;
        
        while(current != null){
            ListNode temp = current.next;
            current.next = previous; //kinda change direction
            previous = current;
            current = temp;
        }
        return previous;
    }
}