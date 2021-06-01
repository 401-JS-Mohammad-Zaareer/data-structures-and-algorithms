'use strict';

const Queue = require('../stacksAndQueues/stacks-and-queues').Queue;

class Node {
    constructor(value, left=null, right=null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    preOrder() {
        if(!this.root) {
            throw new Error('Empty Tree');
        }

        const values = [];
        const traverse = (node) => {
            values.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return values;
    }
    inOrder() {
        if(!this.root) {
            throw new Error('Empty Tree');
        }

        const values = [];
        const traverse = (node) => {
            if(node.left) traverse(node.left);
            values.push(node.value);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return values;
    }
    postOrder() {
        if(!this.root) {
            throw new Error('Empty Tree');
        }
        const values = [];
        const traverse = (node) => {
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            values.push(node.value);
        }
        traverse(this.root);
        return values;
    }

    findMaximumValue() {
        if(!this.root) {
            throw new Error('Empty Tree');
        }
        let max = this.root.value;
        const traverse = (node) => {
            if(node.value > max) {
                max = node.value;
            }   
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return max;
    }

    breadthFirstTraversal() {
        if(!this.root) {
            throw new Error('Empty Tree!');
        }
        const queue = new Queue();
        const values = [];
        queue.enqueue(this.root);
        while(!queue.isEmpty()) {
            const parentNode = queue.front;
            if(parentNode.value.left) queue.enqueue(parentNode.value.left);
            if(parentNode.value.right) queue.enqueue(parentNode.value.right);
            values.push(parentNode.value.value);
            queue.dequeue();
        }   
        return values;
    }
}

class BinarySearchTree  extends BinaryTree {

    add(value) {
        const newNode = new Node(value);
        if(!this.root) { 
            this.root = newNode;
        } else {
            let current = this.root;
            let keepTraversing = true;
            while(keepTraversing) {
                if(value > current.value) {
                    if(current.right) {
                        current = current.right;
                    } else {
                        current.right = newNode;
                        keepTraversing = false;
                    }
                } else if(value < current.value){
                    if(current.left) {
                        current = current.left;
                    } else {
                        current.left = newNode;
                        keepTraversing = false;
                    }
                } else {
                    throw new Error('Already exists!')
                }
            }
        }

    }
    contains(value) {
        let current = this.root;
        while (current) {
            if (value == current.value) {
                return true;
            }
            if (value < current.value) {
                current = current.left;
            } else {
                current = current.right;
            }

        }
        return false;
    }
}


module.exports = {
    Node, BinaryTree, BinarySearchTree   
} 


const bt = new BinaryTree();

bt.root = new Node(2);
bt.root.left = new Node(7);
bt.root.right = new Node(5);
bt.root.left.left = new Node(2);
bt.root.left.right = new Node(6);
bt.root.right.right = new Node(9);
bt.root.right.right.left = new Node(4);
bt.root.left.right.left = new Node(5);
bt.root.left.right.right = new Node(11);
console.log(bt.breadthFirstTraversal().toString());