const containsDuplicate = require('./index');

describe('Contains Duplicate', () => {
    test('should return true for input [1, 2, 3, 1]', () => {
        expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
    });

    test('should return false for input [1, 2, 3, 4]', () => {
        expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
    });

    test('should return true for input [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]', () => {
        expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true);
    });

    test('should return false for input with distinct numbers', () => {
        expect(containsDuplicate([5, 6, 7, 8, 9])).toBe(false);
    });

    test('should return true for input with negative duplicates', () => {
        expect(containsDuplicate([-1, -2, -3, -1])).toBe(true);
    });

    test('should return false for single element array', () => {
        expect(containsDuplicate([1])).toBe(false);
    });
});
