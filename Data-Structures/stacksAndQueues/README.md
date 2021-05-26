# Stacks and Queues
A stack is a linear data structure in which elements can be inserted and deleted only from one side of the list, called the top.
A queue is a linear data structure in which elements can be inserted only from one side of the list called rear, and the elements can be deleted only from the other side called the front. 

## Challenge
implement Stack and Queue data structures.

## Approach & Efficiency
|Data Structure|method|approach of implementation|Big O|
|--------------|------|--------------------------|-----|
|Stack|push()|insert a new node by assigning 'top' to it|time,space: O(1)|
|Stack|pop()|move 'top' pointer to the next node|time,space: O(1)|
|Stack|peek()|return the value of 'top'|time,space: O(1)|
|Stack|isEmpty()|check if 'top' is null|time,space: O(1)|
|Queue|enqueue()|make 'tail' point to the new Node|time,space: O(1)|
|Queue|dequeue()|move 'front' pointer to the next node|time,space: O(1)|
|Queue|peek()|return the value of 'front'|time,space: O(1)|
|Queue|isEmpty()|check if 'front' is null|time,space: O(1)|

## API
Stack
* push() -> add a new element
* pop() -> remove the 'top' element and return it
* peek() -> return the value of 'top' element
* isEmpty() -> check if the stack is empty

Queue
* enqueue -> insert a new element
* dequeue -> delete the 'front' element and return it
* peek() -> return the value of 'front' element
* isEmpty() -> check if the queue is empty