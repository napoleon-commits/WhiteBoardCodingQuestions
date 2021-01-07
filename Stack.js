class Stack {
  constructor() {
    this.stack = [];
  }

  enqueue(val) {
    this.stack.push(val);
  }

  dequeue() {
    const val = this.stack[this.stack.length - 1];
    if (this.stack.length > 0) this.stack.length -= 1;
    return val;
  }
}

module.exports = Stack;
