'use strict';

const binarySearch = require('../challenges/arrayBinarySearch/array-binary-search.js');

describe('Testing binary search', () => {
    test('get the index of the key', () => {
        expect(binarySearch([4, 8, 15, 16, 23, 42], 15)).toStrictEqual(2);
        expect(binarySearch([1, 2, 3, 4], 4)).toStrictEqual(3);
        expect(binarySearch([11, 22, 33, 44, 55, 66, 77], 90)).toStrictEqual(-1);
        expect(binarySearch([2, 4, 6, 6, 6, 12], 6)).toStrictEqual(2);
    });
})