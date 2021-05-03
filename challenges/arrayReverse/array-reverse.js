'use strict';

// return an array with elements in reversed order
function reverseArray(array) {
    const reversedArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reversedArray.push(array[i]);
    }
    return reversedArray;
}

console.log(reverseArray([89, 2354, 3546, 23, 10, -923, 823, -12]))