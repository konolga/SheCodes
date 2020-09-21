/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int x) { val = x; }
 * }
 */
public class Solution
{
    public ListNode MergeTwoLists(ListNode l1, ListNode l2)
    {

        var head = new ListNode(-1);
        var prev = head;


        if (l1 == null && l2 == null) return null;

        while (l1 != null && l2 != null)
        {
            if (l1.val < l2.val)
            {
                prev.next = l1;
                prev = l1;
                l1 = l1.next;
            }
            else
            {
                prev.next = l2;
                prev = l2;
                l2 = l2.next;
            }
        }

        if (l1 == null) prev.next = l2;
        else if (l2 == null) prev.next = l1;

        return head.next;
    }
}