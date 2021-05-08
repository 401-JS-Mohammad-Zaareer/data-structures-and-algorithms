'use strict';

// return the index of the search key or -1 if it dose not exist
function binarySearch(array, key) {
    let size = array.length;
    let low = 0;
    let mid;
    let high = size - 1;

    while (low <= high) {
        mid = ((low + high) - (low + high) % 2) / 2;

        if (array[mid] === key) {
            return mid;
        } else if (key > array[mid]) {
            low = mid + 1;
        } else if (key < array[mid]) {
            high = mid - 1;
        }
    }

    return -1;
}

module.exports = binarySearch;