'use strict';
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.tail = null;
        this.size = 0;
    }

    push(value) {
        const newNode = new Node(value);
        if(!this.tail) {
            this.top = newNode;
            this.tail = newNode;
        } else {
            let temp = this.top;
            this.top = newNode;
            this.top.next = temp;
        }
        this.size++;
    }

    pop() {
        if(!this.top) {
            throw new Error('empty stack!');
        }
        if(this.top === this.tail) {
            this.tail = null;
        }
        const temp = this.top;
        this.top = this.top.next;
        this.size--;
        return temp.value;
    }

    peek() {
        if(!this.top) {
            throw new Error('empty stack!');
        }
        return this.top.value;
    }

    isEmpty() {
        return this.top === null;
    }

    toString() {
        let current = this.top;
        let str = 'top->';
        while(current) {
            str += `{${current.value}}->`;
            current = current.next;
        }
        str += 'NULL';
        return str;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.tail = null;
        this.size = 0;
    }

    enqueue(value) {
        const newNode = new Node(value);
        if(!this.front){
            this.front = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    };
    dequeue(){
        if(!this.front) {
            return null;
        }
        if(this.front === this.tail){
            this.tail = null;
        }
        const current = this.front;
        this.front = this.front.next;
        this.size--;
        return current.value;
    };
    peek(){
        if(!this.front) {
            throw new Error('empty stack!');
        }
        return this.front.value;
    };
    isEmpty(){
        return this.front === null;
    };

    toString() {
        let current = this.front;
        let str = 'front->';
        while(current) {
            str += `{${current.value}}->`;
            current = current.next;
        }
        str += 'NULL';
        return str;
    }
}

module.exports = {
    Stack, Queue, Node
}