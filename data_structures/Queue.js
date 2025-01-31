class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    peek() {
        return this.first;
    }
    enqueue(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this;
    }
    dequeue() {
        if (!this.first) {
            return null;
        }
        if (this.first === this.last) {
            this.last = null;
        }
        const holdingPointer = this.first;
        this.first = this.first.next;
        this.length--;
        return this;
    }
}

// Implementation with array. FIFO
class Queue1 {
    constructor() {
        this.arr = [];
    }
    peek() {
        return this.arr[0];
    }
    enqueue(value) {
        this.arr.push(value);
    };
    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        this.arr.shift();
    };

}

// Implement with stack. LIFO
// LIFO
class MyQueue {
    constructor() {
        this.input = [];
        this.output = [];    
    }
};

push = function (x) {
    this.input.push(x);
};

pop = function () {
    this.peek();
    return this.output.pop();
};

peek = function () {
    if (!this.output.length) {
        while (this.input.length) {
            this.output.push(this.input.pop());
        }
    }
    return this.output[this.output.length - 1];
};

empty = function () {
    return !this.input.length && !this.output.length;
};
