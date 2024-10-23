const { countSmaller } = require('./index');

describe('countSmaller', () => {
    test('should return counts of smaller elements to the right', () => {
        expect(countSmaller([5, 2, 6, 1])).toEqual([2, 1, 1, 0]);
        expect(countSmaller([-1])).toEqual([0]);
        expect(countSmaller([-1, -1])).toEqual([0, 0]);
        expect(countSmaller([1, 2, 3, 4, 5])).toEqual([0, 0, 0, 0, 0]);
        expect(countSmaller([5, 4, 3, 2, 1])).toEqual([4, 3, 2, 1, 0]);
        expect(countSmaller([1, 0, 2])).toEqual([1, 0, 0]);
        expect(countSmaller([])).toEqual([]);
    });
});
