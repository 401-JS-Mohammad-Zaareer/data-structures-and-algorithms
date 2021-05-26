'use strict';

const stackQueue = require('../Data-Structures/stacksAndQueues/stacks-and-queues');

const Stack = stackQueue.Stack;
const Queue = stackQueue.Queue;

describe('Testing Stack Data Structure', ()=>{
    const stack = new Stack();
    it('Can successfully push onto a stack',()=>{
        stack.push(1);
        expect(stack.top.value).toEqual(1);
    });
    it('Can successfully push multiple values onto a stack',()=>{
        stack.push(2);
        stack.push(3);
        expect(stack.size).toEqual(3);
    });
    it('Can successfully pop off the stack',()=>{
        stack.pop();
        expect(stack.top.value).toEqual(2);
    });
    it('Can successfully peek the next item on the stack',()=>{
        expect(stack.peek()).toEqual(2);
    });
    it('Can successfully empty a stack after multiple pops',()=>{
        stack.pop();
        stack.pop();
        expect(stack.top).toBe(null);
    });
    it('Can successfully instantiate an empty stack',()=>{
        expect((new Stack()).isEmpty()).toBeTruthy();
    });
    it('Calling pop or peek on empty stack raises exception',()=>{
        expect(()=>(new Stack).pop()).toThrow('empty stack!');
        expect(()=>(new Stack).peek()).toThrow('empty stack!');
    });
});

describe('Testing Queue Data Structure', ()=>{
    const queue = new Queue();
    it('Can successfully enqueue into a queue',()=>{
        queue.enqueue(1);
        expect(queue.tail.value).toEqual(1);
    });
    it('Can successfully enqueue multiple values into a queue',()=>{
        queue.enqueue(2);
        queue.enqueue(3);
        expect(queue.size).toEqual(3);
    });
    it('Can successfully dequeue out of a queue the expected value',()=>{
        queue.dequeue();
        expect(queue.front.value).toEqual(2);
    });
    it('Can successfully peek into a queue, seeing the expected value',()=>{
        expect(queue.peek()).toEqual(2);
    });
    it('Can successfully instantiate an empty queue',()=>{
        expect((new Queue()).front).toBe(null);
    });
    it('Can successfully empty a queue after multiple dequeues',()=>{
        queue.dequeue();
        queue.dequeue();
        expect(queue.front).toBe(null);
    });
    it('Calling dequeue or peek on empty queue raises exception',()=>{
        expect(()=>(new Queue()).dequeue()).toThrow();
        expect(()=>(new Queue()).peek()).toThrow();
    });
});