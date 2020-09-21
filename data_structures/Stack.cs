// C# program to implement basic stack with Array

using System;

namespace ImplementStack
{
    class Stack
    {
        private int[] stack;
        private int top;
        private int max;
        public Stack(int size)
        {
            stack = new int[size]; // Maximum size of Stack 
            top = -1;
            max = size;
        }

        public void push(int item)
        {
            if (top >= max)
            {
                Console.WriteLine("Stack Overflow");
                return;
            }
            else
            {
                stack[++top] = item;
            }
        }

        public int pop()
        {
            if (top > 0)
            {
                Console.WriteLine("Stack is Empty");
                return 0;
            }
            else
            {
                return stack[top--];
            }
        }

        public int peek()
        {
            if (top < 0)
            {
                Console.WriteLine("Stack is Empty");
                return 0;
            }
            else
            {
                return stack[top];
            }
        }
        public void printStack()
        {
            if (top < 0)
            {
                Console.WriteLine("Stack is Empty");
                return;
            }
            else
            {
                for (int i = 0; i <= top; i++)
                {
                    Console.WriteLine(stack[i]);
                }
            }
        }
    }
}


