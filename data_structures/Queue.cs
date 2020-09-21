// C# program for array implementation of queue 
//FIFO
//with Array
using System;

namespace GeeksForGeeks
{
    class Queue
    {
        private int[] array;
        private int front;
        private int rear;
        private int max;

        public Queue(int size)
        {
            array = new int[size];
            front = 0;
            rear = -1;
            max = size;
        }

        // Function to add an item to the queue. 
        // It changes rear and size 
        public void enqueue(int item)
        {
            if (rear == max - 1)
            {
                Console.WriteLine("Queue Overflow");
                return;
            }
            else
            {
                array[++rear] = item;
            }
        }

        // Function to remove an item from queue. 
        // It changes front and size 
        public int dequeue()
        {
            if (front == rear + 1)
            {
                Console.WriteLine("Queue is Empty");
                return -1;
            }
            else
            {
                return array[front++];
            }
        }

        // Function to print queue. 
        public void printQueue()
        {
            if (front == rear + 1)
            {
                Console.WriteLine("Queue is Empty");
                return;
            }
            else
            {
                for (int i = front; i <= rear; i++)
                {
                    Console.WriteLine(array[i]);
                }
            }
        }
    }
}
