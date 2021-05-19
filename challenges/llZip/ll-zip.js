'use strict';
const SLL = require('../../Data-Structures/linkedList/linked-list.js');
const LinkedList = SLL.LinkedList;

function zipLists(list1, list2) {
    const zippedList = new LinkedList();
    let c1 = list1.head;
    let c2 = list2.head;

    while (c1 || c2) {
        if (c1) {
            zippedList.append(c1.value);
            c1 = c1.next;
        }
        if (c2) {
            zippedList.append(c2.value);
            c2 = c2.next;
        }
    }
    return zippedList;
}

module.exports = zipLists;