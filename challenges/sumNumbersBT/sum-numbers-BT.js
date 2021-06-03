'use strict';
const BinarySearchTree = require('../../Data-Structures/tree/tree').BinarySearchTree;
const Queue = require('../../Data-Structures/stacksAndQueues/stacks-and-queues').Queue;

function sumOddNumbers(binarySearchTree) {
    if(!binarySearchTree.root) {
        return null;
    }

    let sum = 0;
    const queue = new Queue();
    let currentNode = binarySearchTree.root;
    while(currentNode) {
        if(isOdd(currentNode.value)){
            sum += currentNode.value;
        }
        if(currentNode.left) queue.enqueue(currentNode.left);
        if(currentNode.right) queue.enqueue(currentNode.right);

        currentNode= queue.dequeue();
    }
    return sum;
} 

function isOdd(number) {
    return number % 2 == 0? false: true;
}