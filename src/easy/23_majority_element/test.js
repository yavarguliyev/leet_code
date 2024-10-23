const majorityElement = require('./index');

describe('majorityElement', () => {
    test('should return the majority element in [3, 2, 3]', () => {
        expect(majorityElement([3, 2, 3])).toBe(3);
    });

    test('should return the majority element in [2, 2, 1, 1, 1, 2, 2]', () => {
        expect(majorityElement([2, 2, 1, 1, 1, 2, 2])).toBe(2);
    });

    test('should return the majority element in [1]', () => {
        expect(majorityElement([1])).toBe(1);
    });

    test('should return the majority element in [1, 1, 2, 1, 3, 1, 1]', () => {
        expect(majorityElement([1, 1, 2, 1, 3, 1, 1])).toBe(1);
    });

    test('should return the majority element in [5, 5, 5, 2, 2]', () => {
        expect(majorityElement([5, 5, 5, 2, 2])).toBe(5);
    });

    test('should return the majority element in [6, 7, 6, 6, 6, 7]', () => {
        expect(majorityElement([6, 7, 6, 6, 6, 7])).toBe(6);
    });

    test('should return the majority element in a large input', () => {
        const largeInput = Array(25000).fill(1).concat(Array(25000).fill(2));
        expect(majorityElement(largeInput)).toBe(1);
    });

    test('should return the majority element when it is negative', () => {
        expect(majorityElement([-1, -1, -2, -1, -3, -1, -1])).toBe(-1);
    });

    test('should return the majority element with mixed positive and negative numbers', () => {
        expect(majorityElement([3, 2, 3, -3, -3, -3, -3, -3])).toBe(-3);
    });
});
