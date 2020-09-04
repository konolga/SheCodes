//Given a linked list, remove the n-th node from the end of list and return its head.
// 1->2->3->4->5->6->7->8->9-10
// n=4
// 1->2->3->4->5->6->8->9-10
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
using System;

namespace Csharp
{
    public class Solution
    {
        public ListNode RemoveNthFromEnd(ListNode head, int n)
        {
            ListNode cur = head;
            ListNode target = head;
            int totalLen = 0;
            int targetLen = 0;
            while (cur.next != null)
            {
                cur = cur.next;
                totalLen++;
            }
            //remove first node
            if (totalLen == n - 1)
            {
                head = head.next;
                return head;
            }
            //find target node to remove
            while (targetLen < totalLen - n)
            {
                target = target != null ? target.next : null;
                targetLen++;
            }
            //finally remove target
            if (target != null)
            {
                target.next = target.next.next;
            }
            return head;
        }
    }
}