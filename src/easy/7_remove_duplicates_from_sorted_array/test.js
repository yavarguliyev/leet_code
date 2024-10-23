const removeDuplicates = require('./index');

describe('removeDuplicates', () => {
    test('should return 2 for [1,1,2]', () => {
        const nums = [1, 1, 2];
        const k = removeDuplicates(nums);
        expect(k).toBe(2);
        expect(nums.slice(0, k)).toEqual([1, 2]);
    });

    test('should return 5 for [0,0,1,1,1,2,2,3,3,4]', () => {
        const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
        const k = removeDuplicates(nums);
        expect(k).toBe(5);
        expect(nums.slice(0, k)).toEqual([0, 1, 2, 3, 4]);
    });

    test('should return 0 for an empty array', () => {
        const nums = [];
        const k = removeDuplicates(nums);
        expect(k).toBe(0);
        expect(nums).toEqual([]);
    });

    test('should return 1 for a single element array [1]', () => {
        const nums = [1];
        const k = removeDuplicates(nums);
        expect(k).toBe(1);
        expect(nums.slice(0, k)).toEqual([1]);
    });

    test('should return 1 for an array with all identical elements [2,2,2]', () => {
        const nums = [2, 2, 2];
        const k = removeDuplicates(nums);
        expect(k).toBe(1);
        expect(nums.slice(0, k)).toEqual([2]);
    });

    test('should return 3 for [1,2,3]', () => {
        const nums = [1, 2, 3];
        const k = removeDuplicates(nums);
        expect(k).toBe(3);
        expect(nums.slice(0, k)).toEqual([1, 2, 3]);
    });
});
