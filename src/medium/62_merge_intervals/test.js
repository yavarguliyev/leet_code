const merge = require('./index');

describe('merge', () => {
    test('merges overlapping intervals', () => {
        expect(merge([[1, 3], [2, 6], [8, 10], [15, 18]])).toEqual([[1, 6], [8, 10], [15, 18]]);
        expect(merge([[1, 4], [4, 5]])).toEqual([[1, 5]]);
        expect(merge([[1, 2], [3, 4], [5, 6]])).toEqual([[1, 2], [3, 4], [5, 6]]);
    });

    test('handles single interval', () => {
        expect(merge([[1, 3]])).toEqual([[1, 3]]);
    });

    test('handles multiple fully overlapping intervals', () => {
        expect(merge([[1, 4], [2, 3], [3, 5]])).toEqual([[1, 5]]);
    });

    test('handles non-overlapping intervals', () => {
        expect(merge([[1, 2], [3, 4], [5, 6]])).toEqual([[1, 2], [3, 4], [5, 6]]);
    });

    test('handles empty input', () => {
        expect(merge([])).toEqual([]);
    });
});
