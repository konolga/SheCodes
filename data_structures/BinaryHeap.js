/*A Binary Heap is a specialized tree-based data structure that satisfies the heap property. 
It is a complete binary tree where each node's value is either greater than or equal to (max-heap) 
or less than or equal to (min-heap) the values of its children*/

class BinaryHeap {
  constructor(comparator = (a, b) => a - b) {
    this.heap = [];
    this.compareFn = comparator;
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeftChildIndex(index) {
    return 2 * index + 1;
  }

  getRightChildIndex(index) {
    return 2 * index + 2;
  }

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }

  insert(value) {
    this.heap.push(value);
    this.bubbleUp(this.heap.length - 1);
  }

  bubbleUp(index) {
    while (index > 0) {
      const parentIndex = this.getParentIndex(index);
      if (this.comparator(this.heap[parentIndex], this.heap[index]) <= 0) break;
      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }

  extractMin() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown(0);
    return min;
  }

  bubbleDown(index) {
    const lastIndex = this.heap.length - 1;
    while (true) {
      const leftChildIndex = this.getLeftChildIndex(index);
      const rightChildIndex = this.getRightChildIndex(index);
      let smallestIndex = index;

      if (
        leftChildIndex <= lastIndex &&
        this.comparator(this.heap[leftChildIndex], this.heap[smallestIndex]) < 0
      ) {
        smallestIndex = leftChildIndex;
      }
      if (
        rightChildIndex <= lastIndex &&
        this.comparator(this.heap[rightChildIndex], this.heap[smallestIndex]) <
          0
      ) {
        smallestIndex = rightChildIndex;
      }

      if (smallestIndex === index) break;

      this.swap(index, smallestIndex);
      index = smallestIndex;
    }
  }

  peek() {
    return this.heap.length > 0 ? this.heap[0] : null;
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}
