const nodeFactory = (value, leftTail, rightTail) => {
    return {
        value,
        leftTail,
        rightTail,
    }
};

const _five = nodeFactory(5,null,null);
const _eleven = nodeFactory(11,null,null);
const _four = nodeFactory(4,null,null);
const _two = nodeFactory(2,null,null);
const _six = nodeFactory(6,_five,_eleven);
const _nine = nodeFactory(9,_four, null);
const _seven = nodeFactory(7,_two,_six);
const _five1 = nodeFactory(5,null,_nine);
const head = nodeFactory(2,_seven,_five1);

/**
 * Prints the binary tree in inorder traversal
 * @param {Head of binary tree} node 
 */
const inOrderTraverseRecursive = (node) => {
    if(node !== null){
        inOrderTraverseRecursive(node.leftTail);
        console.log(node.value);
        inOrderTraverseRecursive(node.rightTail);
    }
};

/**
 * Prints the binary tree in inorder traversal
 * @param {Head of binary tree} head 
 */
const inOrderTraverseIterative = (head) => {
    const stack = [];
    let currentNode = head;
    while(stack.length !== 0 || currentNode !== null){
        if(currentNode !== null){
            stack.push(currentNode);
            currentNode = currentNode.leftTail;
        } else {
            currentNode = stack.pop();
            console.log(currentNode.value);
            currentNode = currentNode.rightTail;
        }
    }
}

inOrderTraverseRecursive(head);
console.log('---------------');
inOrderTraverseIterative(head);
