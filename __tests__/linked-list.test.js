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
    });
    it('Can successfully add a node to the end of the linked list', () => {
        const newLL = new LinkedList();
        newLL.insert(4);
        newLL.insert(6);
        newLL.append(7);
        expect(newLL.toString()).toEqual('{6}->{4}->{7}->NULL');
    });
    it('Can successfully add multiple nodes to the end of a linked list', () => {
        const newLL = new LinkedList();
        newLL.insert(4);
        newLL.insert(6);
        newLL.append(7);
        newLL.append(8);
        expect(newLL.toString()).toEqual('{6}->{4}->{7}->{8}->NULL');
    });
    it('Can successfully insert a node before a node located i the middle of a linked list', () => {
        const newLL = new LinkedList();
        newLL.insert(4);
        newLL.insert(6);
        newLL.append(7);
        newLL.append(8);
        newLL.insertBefore(7, 5);
        expect(newLL.toString()).toEqual('{6}->{4}->{5}->{7}->{8}->NULL');
    });
    it('Can successfully insert a node before the first node of a linked list', () => {
        const newLL = new LinkedList();
        newLL.insert(4);
        newLL.insert(6);
        newLL.insertBefore(6, 5);
        expect(newLL.toString()).toEqual('{5}->{6}->{4}->NULL');
    });
    it('Can successfully insert after a node in the middle of the linked list', () => {
        const newLL = new LinkedList();
        newLL.insert(4);
        newLL.insert(6);
        newLL.append(7);
        newLL.append(8);
        newLL.insertAfter(7, 5);
        expect(newLL.toString()).toEqual('{6}->{4}->{7}->{5}->{8}->NULL');
    });
    it('Can successfully insert a node after the last node of the linked list', () => {
        const newLL = new LinkedList();
        newLL.insert(4);
        newLL.insert(6);
        newLL.append(7);
        newLL.append(8);
        newLL.insertAfter(8, 5);
        expect(newLL.toString()).toEqual('{6}->{4}->{7}->{8}->{5}->NULL');
    });
});