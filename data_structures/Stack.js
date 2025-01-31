//LIFO principle
//Implementation with linked list

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    peek() {
        return this.top;
    }
    push(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }
        this.length++;
        return this;
    }
    pop() {
        if (!this.top) {
            return null;
        }
        if (this.top === this.bottom) {
            this.bottom = null;
        }
        const holdingPointer = this.top;
        this.top = this.top.next;
        this.length--;
        return this;
    }
}


//Implementation with array
class Stack {
    constructor(){
      this.array = [];
    }
    peek() {
      return this.array[this.array.length-1];
    }
    push(value){
      this.array.push(value);
      return this;
    }
    pop(){
      this.array.pop();
      return this;
    }
  }

  //Implementation with queue
  class MyStack {
    constructor() {
      this.queue = [];
    }

    push(x) {
      this.queue.push(x);
      for (let i = 0; i < this.queue.length - 1; i++) {
        this.queue.push(this.queue.shift());
      }
    }

    pop() {
      return this.queue.shift(); // remove and retur first
    }

    top() {
      return this.queue[0]; // return first without removing
    }

    empty() {
      return this.q.length === 0;
    }
  }