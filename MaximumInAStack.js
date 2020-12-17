class MaxStack {
  constructor() {
    this.stack = [];
    this.nextInsert = 0;
  }

  push(val) {
    this.stack[this.nextInsert] = val;
    this.nextInsert += 1;
  }

  pop() {
    if (this.nextInsert === 0) {
      return null;
    }
    this.nextInsert -= 1;
    const poppedItem = this.stack[this.nextInsert];
    this.stack.length -= 1;
    return poppedItem;
  }

  max() {
    if (this.nextInsert === 0) return null;

    const newStack = new MaxStack();

    let poppedItem = this.pop();
    let max = poppedItem;
    while (poppedItem !== null) {
      if (poppedItem > max) max = poppedItem;
      newStack.push(poppedItem);
      poppedItem = this.pop();
    }

    poppedItem = newStack.pop();
    while (poppedItem !== null) {
      this.push(poppedItem);
      poppedItem = newStack.pop();
    }

    return max;
  }
}

const s = new MaxStack();

s.push(1);
s.push(2);
s.push(3);
s.push(2);

// eslint-disable-next-line
console.log(s.max());

s.pop();
s.pop();

// eslint-disable-next-line
console.log(s.max());
