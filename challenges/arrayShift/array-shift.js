'use strict';

// insert a value at the middle index
function insertShiftArray(array, value) {
    const index = getMiddleIndex(array);
    const shiftedArray = [];
    for (let i = 0; i < array.length; i++) {
        if (i === index) {
            shiftedArray.push(value);
            shiftedArray.push(array[i]);
            continue;
        }
        shiftedArray.push(array[i]);
    }
    return shiftedArray;
}

// return the middle index
const getMiddleIndex = (array) => {
    const size = array.length;
    return size % 2 == 0 ? size / 2 : (size - 1) / 2 + 1;
}

module.exports = insertShiftArray;
console.log(insertShiftArray([4, 8, 15, 23, 42], 16));