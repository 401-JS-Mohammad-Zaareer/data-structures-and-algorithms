'use strict';
const Stack = require('../../Data-Structures/stacksAndQueues/stacks-and-queues').Stack 

function multiBracketValidation(input) {
    if(typeof input != 'string') {
        throw new Error('String Only!')
    }
    const stack = new Stack();
    let isBalanced = true;

    let bracket ={
        '(' : ')',
        '[' : ']',
        '{' : '}'
    }
    
    for(const char of input) {
        if(bracket[char]) {
            stack.push(char);
        } else if(!stack.isEmpty()) {
            if(bracket[stack.peek()] === char) {
                stack.pop();
            } else if (Object.values(bracket).includes(char)){
                isBalanced = false;
                break;
            }
        } else {
            isBalanced = false;
        }
    }

    if(!stack.isEmpty()){
        isBalanced = false;
    }
    return isBalanced;
}

module.exports = multiBracketValidation;
console.log(typeof 'dsdsd');
