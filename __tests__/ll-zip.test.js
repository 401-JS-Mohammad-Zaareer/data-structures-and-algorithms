'use strict';

const zipLists = require('../challenges/llZip/ll-zip.js');
const SLL = require('../Data-Structures/linkedList/linked-list.js');
const LinkedList = SLL.LinkedList;

describe('Test zipLists function', () => {
    const list1 = new LinkedList();
    const list2 = new LinkedList();
    it('should return NULL if the two lists are empty', () => {
        expect(zipLists(list1, list2).toString()).toEqual('NULL');
    });
    it('works properly when the two list have the same length', () => {
        const list1 = new LinkedList();
        const list2 = new LinkedList();
        list1.append(1);
        list1.append(3);
        list1.append(2);
        list2.append(5);
        list2.append(9);
        list2.append(4);
        expect(zipLists(list1, list2).toString()).toEqual('{1}->{5}->{3}->{9}->{2}->{4}->NULL');
    });
    it('works properly when the fisrt list is longer than the second', () => {
        const list1 = new LinkedList();
        const list2 = new LinkedList();
        list1.append(1);
        list1.append(3);
        list1.append(2);
        list2.append(5);
        list2.append(9);
        expect(zipLists(list1, list2).toString()).toEqual('{1}->{5}->{3}->{9}->{2}->NULL');
    });
    it('works properly when the second list is longer than the first', () => {
        const list1 = new LinkedList();
        const list2 = new LinkedList();
        list1.append(1);
        list1.append(3);
        list2.append(5);
        list2.append(9);
        list2.append(4);
        expect(zipLists(list1, list2).toString()).toEqual('{1}->{5}->{3}->{9}->{4}->NULL');
    });
    it('should return properly when one of the lists is Empty', () => {
        const list1 = new LinkedList();
        const list2 = new LinkedList();
        list1.append(1);
        list1.append(3);
        expect(zipLists(list1, list2).toString()).toEqual('{1}->{3}->NULL');
    });
})