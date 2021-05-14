# Singly Linked List
SLL or singly linked list is a data structure that consists of nodes, each node contains data and a pointer to the next node. It also has a pointer to the first node called head.

## Challenge
Write an implementation for the singly list data structure.

## Approach & Efficiency
for the insert method I use an approach with Big O of 1 where the new node added directly before the first existing node, thenmake the head ponit to the new node. regarding the 'includes' method it was Big O of n , beacuse I need to go over all the nodes in the LL to find the value if exists or not in the worst case. I used a while loop beacuse I don't know how many nodes I should check it. 

## API
insert(value) -> insert a new value at the very beginning of the inked list.
includes(value) -> return true if the value is found in the LL and false otherwise.
toString() -> returns a string representation of all nodes' values