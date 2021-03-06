'use strict';

const { TestScheduler } = require('@jest/core');
const insertShiftArray = require('../challenges/arrayShift/array-shift.js');

describe('Testing array shift', () => {
    test('Insert the value at the middle index', () => {
        expect(insertShiftArray([2, 4, 6, 8], 5)).toStrictEqual([2, 4, 5, 6, 8]);
        expect(insertShiftArray([4, 8, 15, 23, 42], 16)).toStrictEqual([4, 8, 15, 16, 23, 42]);
    });
})