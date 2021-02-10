const leftChildIndex = (i) => (2 * i + 1);
const rightChildIndex = (i) => (2 * i + 2);
const parentIndex = (i) => Math.floor((i - 1) / 2);

const addToMinHeap = (heap, val) => {
  const copyHeap = heap;
  copyHeap.unshift(val);
  let doneBubblingDown = false;
  let bubbleIndex = 0;
  while (doneBubblingDown === false && bubbleIndex < copyHeap.length) {
    if (
      copyHeap[leftChildIndex(bubbleIndex)] !== undefined
            && copyHeap[rightChildIndex(bubbleIndex)] !== undefined
    ) {
      let smallestIndex = null;
      let smallestNode = null;
      if (copyHeap[leftChildIndex(bubbleIndex)] < copyHeap[rightChildIndex(bubbleIndex)]) {
        smallestIndex = leftChildIndex(bubbleIndex);
        smallestNode = copyHeap[leftChildIndex(bubbleIndex)];
      } else {
        smallestIndex = rightChildIndex(bubbleIndex);
        smallestNode = copyHeap[rightChildIndex(bubbleIndex)];
      }
      if (copyHeap[bubbleIndex] > smallestNode) {
        const t1 = copyHeap[bubbleIndex];
        const t2 = smallestNode;
        copyHeap[bubbleIndex] = t2;
        copyHeap[smallestIndex] = t1;
        bubbleIndex = smallestIndex;
      } else {
        doneBubblingDown = true;
      }
    } else if (copyHeap[leftChildIndex(bubbleIndex)] !== undefined) {
      if (copyHeap[bubbleIndex] > copyHeap[leftChildIndex(bubbleIndex)]) {
        const t1 = copyHeap[bubbleIndex];
        const t2 = copyHeap[leftChildIndex(bubbleIndex)];
        copyHeap[bubbleIndex] = t2;
        copyHeap[leftChildIndex(bubbleIndex)] = t1;
        bubbleIndex = leftChildIndex(bubbleIndex);
      } else {
        doneBubblingDown = true;
      }
    } else {
      doneBubblingDown = true;
    }
  }
  return copyHeap;
};

const heapifyArray = (heap) => {
  const copyHeap = heap;
  for (let i = copyHeap.length - 1; i > 0; i -= 1) {
    let doneBubblingUp = false;
    let bubbleIndex = i;
    while (doneBubblingUp === false && bubbleIndex > 0) {
      const parent = parentIndex(bubbleIndex);
      if (copyHeap[parent] > copyHeap[bubbleIndex]) {
        const t1 = copyHeap[parent];
        const t2 = copyHeap[bubbleIndex];
        copyHeap[parent] = t2;
        copyHeap[bubbleIndex] = t1;
        bubbleIndex = parentIndex(bubbleIndex);
      } else {
        doneBubblingUp = true;
      }
    }
  }
  return copyHeap;
};

/**
 *
 * Design a simple stack that supports push, pop, top,
 * and retrieving the minimum element in constant time.
 * push(x) -- Push element x onto stack.
 * pop() -- Removes the element on top of the stack.
 * top() -- Get the top element.
 * getMin() -- Retrieve the minimum element in the stack.
 * Note: be sure that pop() and top() handle being called on an empty stack.
 */
class MinStack {
  constructor() {
    this.stack = [];
    this.minHeap = [];
  }

  push(x) {
    this.stack.push(x);
    this.minHeap = addToMinHeap(this.minHeap, x);
  }

  pop() {
    if (this.stack.length > 0) {
      this.stack.length -= 1;
      this.minHeap = heapifyArray(this.stack);
    }
    return null;
  }

  top() {
    if (this.stack.length > 0) {
      return this.stack[this.stack.length - 1];
    }
    return null;
  }

  getMin() {
    if (this.minHeap.length > 0) {
      return this.minHeap[0];
    }
    return null;
  }
}

const x = new MinStack();

x.push(-2);
x.push(0);
x.push(-3);

// eslint-disable-next-line
console.log(x.getMin());

x.pop();

// eslint-disable-next-line
console.log(x.top());

// eslint-disable-next-line
console.log(x.getMin());
