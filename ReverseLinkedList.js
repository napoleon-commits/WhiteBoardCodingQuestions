const listNode = (x) => ({
  val: x,
  next: null,
});

const node5 = listNode(0);
const node4 = listNode(1);
node4.next = node5;
const node3 = listNode(2);
node3.next = node4;
const node2 = listNode(3);
node2.next = node3;
const node1 = listNode(4);
node1.next = node2;

const printList = (node) => {
  let output = '';
  let tempNode = node;
  while (tempNode !== null) {
    output += String(tempNode.val);
    output += ' ';
    tempNode = tempNode.next;
  }
  // eslint-disable-next-line
  console.log(output);
};

printList(node1);

const reverseIteratively = (head) => {
  let reversedLL = null;
  let tempNode = head;
  while (tempNode !== null) {
    if (reversedLL === null) {
      reversedLL = listNode(tempNode.val);
    } else {
      const copyReversedLL = reversedLL;
      reversedLL = listNode(tempNode.val);
      reversedLL.next = copyReversedLL;
    }
    tempNode = tempNode.next;
  }
  return reversedLL;
};

const reverseRecursively = (currentNode) => {
  if (currentNode === null || currentNode.next === null) return currentNode;
  const recursiveLL = reverseRecursively(currentNode.next);
  // eslint-disable-next-line
  currentNode.next.next = currentNode;
  // eslint-disable-next-line
  currentNode.next = null;
  return recursiveLL;
};

printList(reverseIteratively(node1));
printList(reverseRecursively(node1));
