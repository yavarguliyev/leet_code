const firstMissingPositive = require('./index');

describe('firstMissingPositive', () => {
    test('Example 1: nums = [1, 2, 0]', () => {
        expect(firstMissingPositive([1, 2, 0])).toBe(3);
    });

    test('Example 2: nums = [3, 4, -1, 1]', () => {
        expect(firstMissingPositive([3, 4, -1, 1])).toBe(2);
    });

    test('Example 3: nums = [7, 8, 9, 11, 12]', () => {
        expect(firstMissingPositive([7, 8, 9, 11, 12])).toBe(1);
    });

    test('Single missing positive: nums = [1]', () => {
        expect(firstMissingPositive([1])).toBe(2);
    });

    test('All negative numbers: nums = [-1, -2, -3]', () => {
        expect(firstMissingPositive([-1, -2, -3])).toBe(1);
    });

    test('Mixed numbers with duplicates: nums = [1, 2, 2, 3, 3]', () => {
        expect(firstMissingPositive([1, 2, 2, 3, 3])).toBe(4);
    });

    test('Large input case: nums = [1, 2, 3, ..., 100000]', () => {
        const nums = Array.from({ length: 100000 }, (_, i) => i + 1);
        expect(firstMissingPositive(nums)).toBe(100001);
    });

    test('Case with missing positive in between: nums = [2, 1, 0]', () => {
        expect(firstMissingPositive([2, 1, 0])).toBe(3);
    });

    test('Case with all values present: nums = [1, 2, 3, 4]', () => {
        expect(firstMissingPositive([1, 2, 3, 4])).toBe(5);
    });
});
