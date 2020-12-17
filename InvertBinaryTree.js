const node = (value) => ({
  left: null,
  right: null,
  value,
});

const preOrder = (currentNode) => {
  // eslint-disable-next-line
  console.log(currentNode.value);
  if (currentNode.left) preOrder(currentNode.left);
  if (currentNode.right) preOrder(currentNode.right);
};

/**
 *
 * You are given the root of a binary tree. Invert the binary tree in place.
 * That is, all left children should become right children,
 * and all right children should become left children.
 *
 * @param {Object} currentNode
 *
 * @returns {Object} inverted tree
 */
const invertTree = (currentNode) => {
  const copyNode = currentNode;
  if (copyNode === null) return null;
  const right = invertTree(copyNode.right);
  const left = invertTree(copyNode.left);
  copyNode.left = right;
  copyNode.right = left;
  return copyNode;
};

const root = node('a');
root.left = node('b');
root.right = node('c');
root.left.left = node('d');
root.left.right = node('e');
root.right.left = node('f');

preOrder(root);

const invertedTree = invertTree(root);

// eslint-disable-next-line
console.log('------------------');

preOrder(invertedTree);
