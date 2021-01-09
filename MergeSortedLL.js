class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }

  toString() {
    let head = this;
    let str = '';
    while (head) {
      str += head.val;
      head = head.next;
    }
    return str;
  }
}

const a = new Node('1');
a.next = new Node('3');
a.next.next = new Node('5');

const b = new Node('2');
b.next = new Node('4');
b.next.next = new Node('6');

/**
 *
 * You are given an array of k sorted singly linked lists.
 * Merge the linked lists into a single sorted linked list and return it.
 *
 * @param {Array} arrOfLL An array of sorted linked lists
 *
 * @returns {Linked List} a sorted linked list
 */
const merge = (arrOfLL) => {
  const copyOfArr = arrOfLL;
  let head = null;
  let tail = null;
  let doneSorting = false;
  while (doneSorting === false) {
    let allNodesAreNull = true;
    let smallestNumber = Number.POSITIVE_INFINITY;
    let smallestIndex = null;
    for (let i = 0; i < copyOfArr.length; i += 1) {
      if (copyOfArr[i]) {
        allNodesAreNull = false;
        if (copyOfArr[i].val < smallestNumber) {
          smallestNumber = copyOfArr[i].val;
          smallestIndex = i;
        }
      }
    }
    if (smallestIndex !== null) {
      if (head === null) {
        head = new Node(copyOfArr[smallestIndex].val);
        tail = head;
      } else {
        tail.next = new Node(copyOfArr[smallestIndex].val);
        tail = tail.next;
      }
      copyOfArr[smallestIndex] = copyOfArr[smallestIndex].next;
    }
    if (allNodesAreNull) doneSorting = true;
  }
  return head;
};

// eslint-disable-next-line
console.log(
  merge([a, b]).toString(),
);
