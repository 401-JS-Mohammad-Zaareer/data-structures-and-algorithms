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

    isEmpty() {
        return this.head === null ? true : false;
    }

    kthFromEnd(k) {
        let target = this.head;
        let current = this.head;
        let counter = k;
        if (this.isEmpty()) {
            throw new Error('Empty Linked List!');
        }
        if (k < 0) {
            throw new Error('Negative not allowed!');
        }
        while (current.next) {
            current = current.next;
            if (counter > 0) {
                counter--;
            } else {
                target = target.next;
            }
        }
        if (counter > 0) {
            throw new Error('K is out of range!');
        }
        return target.value;
    }
}

module.exports = {
    Node,
    LinkedList
}

const ll = new LinkedList();