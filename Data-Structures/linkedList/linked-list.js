'use strict';
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(head) {
        this.head = null;
    }

    insert(value) {
        const temp = this.head;
        this.head = new Node(value);
        this.head.next = temp;
    }

    includes(value) {
        if (!this.head) {
            throw 'Empty Linked List!';
        }
        let current = this.head;
        while (current) {
            if (current.value === value) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    toString() {
        let current = this.head;
        let str = '';
        if (!current) {
            return 'NULL';
        }
        while (current) {
            str += `{${current.value}}->`;
            current = current.next;
        }
        str += 'NULL';
        return str;
    }

    append(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
    }
    insertBefore(value, newVal) {
        if (this.includes(value)) {
            const node = new Node(newVal);
            let previous = null;
            let current = this.head;
            while (current.value !== value) {
                previous = current;
                current = current.next;
            }
            if (!previous) {
                node.next = current;
                this.head = node;
            } else {
                node.next = current;
                previous.next = node;
            }
        } else {
            throw new Error(`${value} does not exist in the LL`);
        }
    }

    insertAfter(value, newVal) {
        if (this.includes(value)) {
            const node = new Node(newVal);
            let current = this.head;
            while (current.value !== value) {
                current = current.next;
            }
            node.next = current.next;
            current.next = node;
        } else {
            throw new Error(`${value} does not exist in the LL`);
        }
    }
}

module.exports = {
    Node,
    LinkedList
}

// creating a new empty SLL
const linkedList = new LinkedList();

// insert a new node
linkedList.insert(5);

// append a new node
linkedList.append(6);

// insert before a node
linkedList.insertBefore(5, 4);

// insert after node
linkedList.insertAfter(6, 3);

// check if 9 is in the ll
linkedList.includes(9);

// return ll as formated string
console.log(linkedList.toString());