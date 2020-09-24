public class MyQueue
{
    //stack is LIFO, Queue is FIFO. Need to use to stacks, push twice,
    // so LIFO -> FOFI -> FIFO
    //https://leetcode.com/problems/implement-queue-using-stacks/solution/

    Stack stack = new Stack();
    Stack queue = new Stack();
    /** Push element x to the back of queue. */
    public void Push(int x)
    {
        stack.Push(x);
    }

    /** Removes the element from in front of queue and returns that element. */
    public int Pop()
    {
        Peek();
        return Convert.ToInt32(queue.Pop());
    }

    /** Get the front element. */
    public int Peek()
    {
        if (queue.Count == 0)
        {
            while (stack.Count != 0)
            {
                queue.Push(stack.Pop());
            }
        }
        return Convert.ToInt32(queue.Peek());

    }

    /** Returns whether the queue is empty. */
    public bool Empty()
    {
        return (stack.Count == 0 && queue.Count == 0);
    }
}
