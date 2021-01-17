class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  toString() {
    let copyHead = this;
    const arr = [];
    while (copyHead) {
      arr.push(copyHead.value);
      copyHead = copyHead.next;
    }
    return arr;
  }
}

let head = null;
let tail = null;

/**
 * Generate a random Linked List with 10 nodes
 */
for (let i = 0; i < 9; i += 1) {
  if (head === null) {
    head = new LinkedListNode(Math.floor(Math.random() * 10));
    tail = head;
  } else {
    tail.next = new LinkedListNode(Math.floor(Math.random() * 10));
    tail = tail.next;
  }
}

/**
 *
 * Given the head of a linked list, return the middle element in O(n) time
 *
 * @param {LinkedListNode} h
 *
 * @returns {LinkedListNode} middle element
 */
const middleOfLinkedList = (h) => {
  let tourtoise = h;
  let hare = h;
  while (hare && hare.next) {
    tourtoise = tourtoise.next;
    hare = hare.next.next;
  }
  return tourtoise;
};

// eslint-disable-next-line
console.log(
  head.toString(),
);
// eslint-disable-next-line
console.log(
  middleOfLinkedList(head).value,
);
