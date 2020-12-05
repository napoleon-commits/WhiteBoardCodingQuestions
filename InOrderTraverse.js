const nodeFactory = (value, leftTail, rightTail) => ({
  value,
  leftTail,
  rightTail,
});

const nodefive = nodeFactory(5, null, null);
const nodeeleven = nodeFactory(11, null, null);
const nodefour = nodeFactory(4, null, null);
const nodetwo = nodeFactory(2, null, null);
const nodesix = nodeFactory(6, nodefive, nodeeleven);
const nodenine = nodeFactory(9, nodefour, null);
const nodeseven = nodeFactory(7, nodetwo, nodesix);
const nodefive1 = nodeFactory(5, null, nodenine);
const head = nodeFactory(2, nodeseven, nodefive1);

/**
 * Prints the binary tree in inorder traversal
 * @param {Head of binary tree} node
 */
const inOrderTraverseRecursive = (node) => {
  if (node !== null) {
    inOrderTraverseRecursive(node.leftTail);
    // eslint-disable-next-line
    console.log(node.value);
    inOrderTraverseRecursive(node.rightTail);
  }
};

/**
 * Prints the binary tree in inorder traversal
 * @param {Head of binary tree} head
 */
const inOrderTraverseIterative = (headNode) => {
  const stack = [];
  let currentNode = headNode;
  while (stack.length !== 0 || currentNode !== null) {
    if (currentNode !== null) {
      stack.push(currentNode);
      currentNode = currentNode.leftTail;
    } else {
      currentNode = stack.pop();
      // eslint-disable-next-line
      console.log(currentNode.value);
      currentNode = currentNode.rightTail;
    }
  }
};

inOrderTraverseRecursive(head);
// eslint-disable-next-line
console.log('---------------');
inOrderTraverseIterative(head);
