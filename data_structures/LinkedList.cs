// https://leetcode.com/explore/learn/card/linked-list/
// It takes us O(N) time on average to visit an element by index
public class LinkedList
{
    private class ListNode
    {
        public int value;
        public ListNode next;
        public ListNode(int value)
        {
            value = value;
            next = null;
        }
    }

    private ListNode _head = null;
    private ListNode _tail = null;
    private int _length = 0;

    public LinkedList()
    {

    }

    public int Get(int index)
    {
        if (index < 0 || index >= _length)
        {
            return -1;
        }

        int i = 0;
        var curr = _head;
        while (i != index)
        {
            i++;
            curr = curr.next;
        }

        return curr.val;
    }

    public void Prepend(int val)
    {
        var newHead = new ListNode(val);
        newHead.next = _head;
        _head = newHead;

        if (_tail == null)
        {
            if (_length != 0)
            {
                throw new Exception($"Tail was null but length = {_length}");
            }

            _tail = newHead;
        }

        _length++;
    }

    public void Append(int val)
    {
        if (_tail == null)
        {
            Prepend(val);
            return;
        }

        _tail.next = new ListNode(val);
        _tail = _tail.next;
        _length++;
    }

    public void Insert(int index, int val)
    {
        if (index == _length)
        {
            Append(val);
            return;
        }

        if (index == 0)
        {
            Prepend(val);
            return;
        }

        if (index < 0 || index > _length)
        {
            return;
        }

        index--;
        int i = 0;
        var curr = _head;
        while (i != index)
        {
            i++;
            curr = curr.next;
        }

        var next = curr.next;
        curr.next = new ListNode(val);
        curr.next.next = next;
        _length++;
    }

    public void Remove(int index)
    {
        if (index < 0 || index >= _length)
        {
            return;
        }

        if (index == 0)
        {
            _head = _head.next;
            if (_length == 1)
            {
                _tail = null;
            }
        }
        else
        {
            index--;
            int i = 0;
            var curr = _head;
            while (i != index)
            {
                i++;
                curr = curr.next;
            }

            var itemToRemove = curr.next;
            curr.next = itemToRemove.next;
            if (itemToRemove == _tail)
            {
                _tail = curr;
            }
        }

        _length--;
    }
}