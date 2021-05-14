'use strict';

const { Node, LinkedList } = require('../Data-Structures/linkedList/linked-list.js');

describe('Testing LinkedList class', () => {
    it('Can successfully instantiate an empty linked list', () => {
        const newLL = new LinkedList();
        expect(newLL.head).toBe(null);
    });
    it('Can properly insert into the linked list', () => {
        const newLL = new LinkedList();
        newLL.insert(5);
        expect(newLL.head.value).toEqual(5);
    });
    it('The head property will properly point to the first node in the linked list & Can properly insert multiple nodes into the linked list', () => {
        const newLL = new LinkedList();
        newLL.insert(4);
        newLL.insert(6);
        expect(newLL.head.value).toEqual(6);
        expect(newLL.head.next.value).toEqual(4);
    });
    it('Will return true when finding a value within the linked list that exists', () => {
        const newLL = new LinkedList();
        newLL.insert(4);
        newLL.insert(6);
        expect(newLL.includes(6)).toBe(true);
    });
    it('Will return false when searching for a value in the linked list that does not exist', () => {
        const newLL = new LinkedList();
        newLL.insert(4);
        newLL.insert(6);
        expect(newLL.includes(10)).toBe(false);
    });
    it('Can properly return a collection of all the values that exist in the linked list', () => {
        const newLL = new LinkedList();
        newLL.insert(4);
        newLL.insert(6);
        expect(newLL.toString()).toEqual('{6}->{4}->NULL')
    })
});