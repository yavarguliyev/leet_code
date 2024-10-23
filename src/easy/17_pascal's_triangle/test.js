const generate = require('./index');

describe('generate', () => {
    test('should return the first 5 rows of Pascal\'s triangle', () => {
        expect(generate(5)).toEqual([[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]);
    });

    test('should return the first row of Pascal\'s triangle for numRows = 1', () => {
        expect(generate(1)).toEqual([[1]]);
    });

    test('should return the first 2 rows of Pascal\'s triangle', () => {
        expect(generate(2)).toEqual([[1], [1, 1]]);
    });

    test('should return the first 3 rows of Pascal\'s triangle', () => {
        expect(generate(3)).toEqual([[1], [1, 1], [1, 2, 1]]);
    });

    test('should return the first 4 rows of Pascal\'s triangle', () => {
        expect(generate(4)).toEqual([[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]]);
    });

    test('should return an empty array for numRows = 0', () => {
        expect(generate(0)).toEqual([]);
    });
});
