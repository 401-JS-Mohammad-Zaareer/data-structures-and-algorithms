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
}

module.exports = {
    Node,
    LinkedList
}