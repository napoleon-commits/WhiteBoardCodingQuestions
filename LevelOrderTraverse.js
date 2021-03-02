class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

/**
 * Given the root of a binary tree, print its level-order traversal
 * @param {Node} root
 */
const printLevelOrder = (root) => {
  const queue = [];
  const order = [];
  if (root) {
    queue.push(root);
    while (queue.length > 0) {
      if (queue[0].left) {
        queue.push(queue[0].left);
      }
      if (queue[0].right) {
        queue.push(queue[0].right);
      }
      order.push(queue[0].val);
      queue.shift();
    }
    // eslint-disable-next-line
    console.log(order.join(' '));
  } else {
    // eslint-disable-next-line
    console.log('');
  }
};

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.right.left = new Node(4);
root.right.right = new Node(5);

printLevelOrder(root);
