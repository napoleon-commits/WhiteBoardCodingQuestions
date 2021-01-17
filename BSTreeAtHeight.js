class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

/**
 *
 * Given a binary tree, return all values given a certain height.
 *
 * @param {Node} root
 * @param {Number} height
 *
 * @returns {Array} the values at the given height
 */
const valuesAtHeight = (root, height) => {
  const valuesArray = [];
  const traverse = (node, depth) => {
    if (node !== null) {
      if (depth === height) valuesArray.push(node.value);
      if (node.left) traverse(node.left, depth + 1);
      if (node.right) traverse(node.right, depth + 1);
    }
  };
  traverse(root, 1);
  return valuesArray;
};

const a = new Node(1);
a.left = new Node(2);
a.right = new Node(3);
a.left.left = new Node(4);
a.left.right = new Node(5);
a.right.right = new Node(7);

// eslint-disable-next-line
console.log(
  valuesAtHeight(a, 3),
);
