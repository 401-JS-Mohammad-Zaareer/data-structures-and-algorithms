'use strict';

const {Node, Tree, fizzBuzzTree} = require('../challenges/fizzBuzzTree/fizz-buzz-tree');

describe('Testing fizzBuzzTree', ()=> {
    it('should return a tree with new values', ()=>{
        const tree = new Tree(1);
        tree.root.children.push(new Node(3));
        tree.root.children.push(new Node(2));
        tree.root.children.push(new Node(4));
        tree.root.children[0].children.push(new Node(5));
        tree.root.children[0].children.push(new Node(6));

        expect(fizzBuzzTree(tree).root.data).toEqual('1');
        expect(fizzBuzzTree(tree).root.children[0].data).toEqual('Fizz');
        expect(fizzBuzzTree(tree).root.children[1].data).toEqual('2');
        expect(fizzBuzzTree(tree).root.children[2].data).toEqual('4');
        expect(fizzBuzzTree(tree).root.children[0].children[0].data).toEqual('Buzz');
        expect(fizzBuzzTree(tree).root.children[0].children[1].data).toEqual('Fizz');
    });
})