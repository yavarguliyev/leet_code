const singleNumber = require('./index');

describe('singleNumber', () => {
    test('should return 1 for input [2, 2, 1]', () => {
        expect(singleNumber([2, 2, 1])).toBe(1);
    });

    test('should return 4 for input [4, 1, 2, 1, 2]', () => {
        expect(singleNumber([4, 1, 2, 1, 2])).toBe(4);
    });

    test('should return 1 for input [1]', () => {
        expect(singleNumber([1])).toBe(1);
    });

    test('should return -1 for input [-1, -1, 0]', () => {
        expect(singleNumber([-1, -1, 0])).toBe(0);
    });

    test('should return 10 for input [10, 1, 2, 1, 2]', () => {
        expect(singleNumber([10, 1, 2, 1, 2])).toBe(10);
    });

    test('should return 0 for input [0, 0, 3]', () => {
        expect(singleNumber([0, 0, 3])).toBe(3);
    });
});
