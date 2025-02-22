const { flattenArray, flattenObject } = require('../flatten.js');

describe('flatten array', () => {
    test('empty array', () => {
        expect(flattenArray([])).toEqual([]);
    });

    test('nested array', () => {
        expect(flattenArray([1, [2]])).toEqual([1, 2]);
    });

    test('multiple levels of nesting', () => {
        expect(flattenArray([1, [2, [3]]])).toEqual([1, 2, 3]);
    });
});

describe('flatten object', () => {
    test('empty object', () => {
        expect(flattenObject({})).toEqual({});
    });

    test('nested object', () => {
        expect(flattenObject({ a: 1, b: { c: 2 } })).toEqual({ a: 1, c: 2 });
    });

    test('multiple levels of nesting', () => {
        expect(flattenObject({ a: 1, b: { c: 2, d: { e: 3 } } })).toEqual({ a: 1, c: 2, e: 3 });
    });
});
