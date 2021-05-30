'use strict';

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

const bst = new BinarySearchTree();
bst.root = new Node(8);
bst.add(10);
bst.add(3);
bst.add(1);
bst.add(6);
bst.add(4);
bst.add(7);
bst.add(14);
bst.add(13);


console.log(bst);
console.log(bst.root.right.right.left);
console.log(bst.contains(100));
