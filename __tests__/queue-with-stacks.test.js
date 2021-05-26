'use strict';

const PseudoQueue = require('../challenges/queueWithStacks/queue-with-stacks');

const pseudoQueue = new PseudoQueue();
describe('Testing pseudo class interface', ()=> {
    it('can enqueue one element successfully', ()=>{
        pseudoQueue.enqueue(1);
        expect(pseudoQueue.stack1.peek()).toEqual(1);
    });
    it('can add multiple elements', ()=>{
        pseudoQueue.enqueue(2);
        pseudoQueue.enqueue(3);
        expect(pseudoQueue.stack1.size).toEqual(3);
    });
    it('can dequeue successfully', ()=>{
        pseudoQueue.dequeue();
        expect(pseudoQueue.stack1.size).toEqual(2);
    });
});