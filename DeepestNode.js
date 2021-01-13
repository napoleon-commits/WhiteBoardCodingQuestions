class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }

  toString() {
    return this.val;
  }
}

/**
 *
 * You are given the root of a binary tree. Return the deepest node.
 *
 * @param {Object} node
 *
 * @returns {Object} deepest node
 */
const deepest = (node) => {
  let biggestNumber = Number.NEGATIVE_INFINITY;
  let biggestNode = null;
  const traverse = (n, depth) => {
    if (n !== null) {
      if (depth > biggestNumber) {
        biggestNumber = depth;
        biggestNode = n;
      }
      traverse(n.left, depth + 1);
      traverse(n.right, depth + 1);
    }
  };
  traverse(node, 0);
  return biggestNode;
};

const root = new Node('a');
root.left = new Node('b');
root.left.left = new Node('d');
root.right = new Node('c');

// eslint-disable-next-line
console.log(
  deepest(root).toString(),
);
