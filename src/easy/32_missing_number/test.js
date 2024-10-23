const missingNumber = require('./index');

// Unit tests
describe('missingNumber', () => {
    test('should return 2 for input [3, 0, 1]', () => {
        expect(missingNumber([3, 0, 1])).toBe(2);
    });

    test('should return 2 for input [0, 1]', () => {
        expect(missingNumber([0, 1])).toBe(2);
    });

    test('should return 8 for input [9, 6, 4, 2, 3, 5, 7, 0, 1]', () => {
        expect(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])).toBe(8);
    });

    test('should return 0 for input [1]', () => {
        expect(missingNumber([1])).toBe(0);
    });

    test('should return 1 for input [0]', () => {
        expect(missingNumber([0])).toBe(1);
    });

    test('should return 5 for input [0, 1, 2, 3, 4]', () => {
        expect(missingNumber([0, 1, 2, 3, 4])).toBe(5);
    });

    test('should return 6 for input [5, 0, 2, 3, 4, 1]', () => {
        expect(missingNumber([5, 0, 2, 3, 4, 1])).toBe(6);
    });

    test('should return 3 for input [0, 1, 2, 4, 5]', () => {
        expect(missingNumber([0, 1, 2, 4, 5])).toBe(3);
    });

    test('should return 9 for input [0, 1, 2, 3, 4, 5, 6, 7, 8]', () => {
        expect(missingNumber([0, 1, 2, 3, 4, 5, 6, 7, 8])).toBe(9);
    });
});
