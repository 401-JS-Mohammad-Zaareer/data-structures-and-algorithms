'use strict';
const linkedList = require('../../Data-Structures/linkedList/linked-list');
const LinkedList = linkedList.LinkedList;

function isPalindrome(list) {
    let current = list.head;
    const reversedList = new LinkedList();

    if(!current) {
        throw new Error('empty list!');
    }

    while(current) {
        reversedList.insert(current.value);
        current = current.next;
    }

    // compare the two lists for equality
    let pointer1 = list.head;
    let pointer2 = reversedList.head;

    while(pointer1) {
        if(pointer1.value == pointer2.value) {
            pointer1 = pointer1.next;
            pointer2 = pointer2.next;
        } else {
            return false;
        }
    }
    return true;
}