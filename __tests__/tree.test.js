'use strict';

const {Node, BinaryTree, BinarySearchTree} = require('../Data-Structures/tree/tree');

describe('Testing Tree', ()=> {
    const BST = new BinarySearchTree();
    it('Can successfully instantiate an empty tree', ()=>{
        expect(BST).toBeDefined();
    });
    it('Can successfully instantiate a tree with a single root node', ()=>{
        BST.add(8);
        expect(BST.root.value).toEqual(8);
    });
    it('Can successfully add a left child and right child to a single root node', ()=>{
        BST.add(10);
        BST.add(7);
        expect(BST.root.left.value).toEqual(7);
        expect(BST.root.right.value).toEqual(10);
    });
    it('Can successfully return a collection from a preorder traversal', ()=>{
        expect(BST.preOrder()).toEqual([8, 7, 10]);
    });
    it('Can successfully return a collection from an inorder traversal', ()=>{
        expect(BST.inOrder()).toEqual([7, 8, 10]);
    });
    it('Can successfully return a collection from a postorder traversal', ()=>{
        expect(BST.postOrder()).toEqual([7, 10, 8]);
    });
    it('Can successfully return the maximum value', ()=>{
        expect(BST.findMaximumValue()).toEqual(10);
    });
    it('Can traverse by Breadth first ALgorithm', ()=> {
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

        expect(bt.breadthFirstTraversal()).toEqual([2,7,5,2,6,9,5,11,4]);
    })
})