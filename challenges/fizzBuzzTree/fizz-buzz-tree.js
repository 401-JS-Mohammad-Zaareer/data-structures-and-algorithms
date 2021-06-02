'use strict';
const Queue = require('../../Data-Structures/stacksAndQueues/stacks-and-queues').Queue;

class Node {
    constructor(data, parent) {
        this.data = data;
        this.children = [];
    }
}

class Tree {
    constructor(data) {
        this.root = new Node(data, this);
    }
}

function fizzBuzzTree(tree) {
    let currentNode = tree.root;
    const queue = new Queue();  
    while(currentNode) {
        currentNode.data = fizzBuzz(currentNode.data);
        for(let i=0; i<currentNode.children.length; i++) {
            queue.enqueue(currentNode.children[i]); 
        }
        currentNode = queue.dequeue();
    }
    return tree;
}

function fizzBuzz(integer) {
    if(integer % 3 == 0 && integer % 5 == 0) {
        return 'FizzBuzz';
    } else if(integer % 3 == 0) {
        return 'Fizz';
    } else if(integer % 5 == 0) {
        return 'Buzz';
    } else {
        return integer.toString();
    }
}

// create 3-ary tree
const tree = new Tree(1);

tree.root.children.push(new Node(3));
tree.root.children.push(new Node(2));
tree.root.children.push(new Node(4));
tree.root.children[0].children.push(new Node(5));
tree.root.children[0].children.push(new Node(6));

console.log(fizzBuzzTree(tree));


module.exports = {Node, Tree, fizzBuzzTree};