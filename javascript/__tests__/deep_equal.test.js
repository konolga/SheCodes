const deepEqual = require('../deep_equal.js');
describe('deepEqual', () => {
    test('primitive values', () => {
        expect(deepEqual(0, 0)).toEqual(true);
        expect(deepEqual(true, 1)).toEqual(false);
        expect(deepEqual(false, false)).toEqual(true);
        expect(deepEqual(null, null)).toEqual(true);
    });

    test('arrays', () => {
        expect(deepEqual(['1'], ['1'])).toEqual(true);
        expect(deepEqual([1, 2, 3], [1, 3, 2])).toEqual(false);
        expect(deepEqual(['1'], [1])).toEqual(false);
    });

    test('objects', () => {
        expect(deepEqual({ foo: 'bar' }, { foo: 'bar' })).toEqual(true);
        expect(deepEqual({ foo: 'bar', id: 1 }, { foo: 'bar', id: 1 })).toEqual(
            true,
        );
        expect(deepEqual({ foo: '1' }, { foo: 1 })).toEqual(false);
    });
});
