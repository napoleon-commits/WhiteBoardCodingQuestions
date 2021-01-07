const Stack = require('./Stack');

/**
 * Implement a queue using two stacks
 */
class Queue {
  constructor() {
    this.stackOne = new Stack();
    this.stackTwo = new Stack();
  }

  enqueue(val) {
    this.stackOne.enqueue(val);
  }

  dequeue() {
    let poppedValue = this.stackOne.dequeue();
    while (poppedValue) {
      this.stackTwo.enqueue(poppedValue);
      poppedValue = this.stackOne.dequeue();
    }
    const val = this.stackTwo.dequeue();
    poppedValue = this.stackTwo.dequeue();
    while (poppedValue) {
      this.stackOne.enqueue(poppedValue);
      poppedValue = this.stackTwo.dequeue();
    }
    return val;
  }
}

const q = new Queue();

q.enqueue(1);
q.enqueue(2);
q.enqueue(3);

// eslint-disable-next-line
console.log(q.dequeue());
// eslint-disable-next-line
console.log(q.dequeue());
// eslint-disable-next-line
console.log(q.dequeue());
