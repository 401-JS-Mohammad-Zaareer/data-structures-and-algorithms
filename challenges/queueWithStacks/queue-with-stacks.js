'use strict';
const Stack = require('../../Data-Structures/stacksAndQueues/stacks-and-queues').Stack;

class PseudoQueue {
    constructor() {
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }

    enqueue(value) {
        this.stack1.push(value);
    };
    dequeue(){
        if(!this.stack1.top) {
            throw new Error('empty queue!');
        }
        while(this.stack1.top.next) {
            this.stack2.push(this.stack1.pop());
        }
        const temp = this.stack1.peek(); 
        this.stack1.pop();

        while(this.stack2.top) {
            this.stack1.push(this.stack2.pop());
        }
        return temp;
    };
}

module.exports = PseudoQueue;