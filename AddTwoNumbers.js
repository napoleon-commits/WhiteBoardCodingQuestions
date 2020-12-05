const ListNode = (x) => ({
    val: x,
    next: null,
});

let l1 = ListNode(2);
l1.next = ListNode(4);
l1.next.next = ListNode(3);

let l2 = ListNode(5);
l2.next = ListNode(6);
l2.next.next = ListNode(4);

/**
 * 
 * You are given two linked-lists representing two non-negative integers.
 * The digits are stored in reverse order and each of their nodes contain a single digit.
 * Add the two numbers and return it as a linked list.
 * 
 * The function assumes both linked lists are the same size
 * 
 * @param {LinkedList} l1 
 * @param {LinkedList} l2 
 */
const addTwoNumbers = (l1,l2) => {
    let head = null;
    let node1 = l1;
    let node2 = l2;
    let carry = 0;
    while(node1 !== null && node2 !== null){
        let currentAddition
        if((node1.val + node2.val + carry)>9){
            carry = 1;
            currentAddition = ListNode(
                (node1.val + node2.val) % 10
            );
        } else {
            currentAddition = ListNode(
                node1.val + node2.val + carry
            );
            carry = 0;
        }

        currentAddition.next = head;
        head = currentAddition;

        node1 = node1.next;
        node2 = node2.next;
    }
    return head;
};

let result = addTwoNumbers(l1, l2);

/**
 * Javascript doesn't allow pointers.
 * Therefore, the resulting linked list is in reverse order
 */
while(result !== null){
    console.log(result.val);
    result = result.next;
}