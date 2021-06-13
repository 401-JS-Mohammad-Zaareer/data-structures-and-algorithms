'use strict';

const insertionSort = require('../challenges/insertionSort/insertion-sort');

describe('Testing insertionSort function', ()=>{
    it('Sorts an array of integers in ascending order', ()=>{
        const arr = [8,4,23,42,16,15];
        const sortedArr = [ 4, 8, 15, 16, 23, 42 ];
        insertionSort(arr);
        expect(arr).toEqual(sortedArr);
    });
    it('Sorts an array that is reverse-sorted', ()=>{
        const arr = [20,18,12,8,5,-2];
        const sortedArr = [-2, 5, 8, 12, 18, 20];
        insertionSort(arr);
        expect(arr).toEqual(sortedArr);
    });
    it('Sorts an array with few uniques', ()=>{
        const arr = [5,12,7,5,5,7];
        const sortedArr = [ 5, 5, 5, 7, 7, 12 ];
        insertionSort(arr);
        expect(arr).toEqual(sortedArr);
    });
    it('Sorts an array that nearly sorted', ()=>{
        const arr = [2,3,5,7,13,11];
        const sortedArr = [ 2, 3, 5, 7, 11, 13 ];
        insertionSort(arr);
        expect(arr).toEqual(sortedArr);
    });
})

