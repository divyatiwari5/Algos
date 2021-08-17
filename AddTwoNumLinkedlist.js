/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;               
    }
}

class LinkedList {
    constructor(head = null) {
        console.log({head});
        this.head = head;
    }

    addItemInLL(element) {
        var current;
        const newnode = new ListNode(element);

        if (this.head === null) {
            this.head = newnode;
        } else {
            current = this.head;

            while (current.next) {
                current = current.next;
            }

            current.next = newnode;
        }

        console.log({current});
    }
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

let l1 = [9,9,9,9,9,9,9];
let l2 = [9,9,9];

var addTwoNumbersLL = function(l1, l2) {
    const lengthL1 = l1.length;
    const lengthL2 = l2.length;
    let carry=0;
    let current = new ListNode(0);
    let result = current;

    let node1 = new ListNode('test');
    let node2 = new ListNode('okk');
    node1.next = node2;

    let ll = new LinkedList(node1);
    console.log(ll);

    let len;

    if (lengthL1 > lengthL2) len = lengthL1;
    else len = lengthL2;

    var i=0;

    while(i < len) {
        let sum;
        sum = l1[i]+l2[i]+carry;
        
        addItemInLL(sum);

        if (l1[i] && !l2[i]) {
            sum = l1[i] + carry;
            addItemInLL(sum);
        } else if (!l1[i] && l2[i]) {
            sum = l2[i] + carry;
            addItemInLL(sum);
        } else if(carry > 0) {
            sum = carry;
            addItemInLL(sum);
        }
        i++;
    }

    if (carry > 0) {
        let sum = carry;
        addItemInLL(sum);
    }

}

addTwoNumbersLL(l1, l2);



 var addTwoNumbers = function(l1, l2) {
    const lengthL1 = l1.length;
    const lengthL2 = l2.length;
    let len;
    if (lengthL1 > lengthL2) len = lengthL1;
    else len = lengthL2;
    
    const sumLinkedList = [];

    let carry = 0;
    let loopEnd = false;

    for (var i=0; i<len; i++) {
        let sum;
        if (l1[i] && l2[i]) {
            sum = l1[i]+l2[i]+carry;
        } else if (l1[i] && !l2[i]) {
            sum = l1[i] + carry;
        } else if (!l1[i] && l2[i]) {
            sum = l2[i] + carry;
        }

        if (`${sum}`.length > 1) {
            carry = String(sum).charAt(0);
            carry = Number(carry);
            const numberToBePushed = String(sum).charAt(1);
            sumLinkedList.push(Number(numberToBePushed));
        } else {
            carry = 0;
            sumLinkedList.push(sum);
        }

        if (len - 1 === i) {
            loopEnd = true;
        }

    }

    if (loopEnd && carry > 0) {
        const sum = carry;
        sumLinkedList.push(sum);
    }
    console.log(sumLinkedList);
};

// addTwoNumbers(l1, l2);
