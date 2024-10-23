const twoSum = require('./index');

test('Example 1: nums = [2,7,11,15], target = 9 should return [0, 1]', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
});

test('Example 2: nums = [3,2,4], target = 6 should return [1, 2]', () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
});

test('Example 3: nums = [3,3], target = 6 should return [0, 1]', () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
});

test('Negative numbers: nums = [-3,4,3,90], target = 0 should return [0, 2]', () => {
    expect(twoSum([-3, 4, 3, 90], 0)).toEqual([0, 2]);
});

test('Target is 0: nums = [0, 4, 0], target = 0 should return [0, 2]', () => {
    expect(twoSum([0, 4, 0], 0)).toEqual([0, 2]);
});

test('Larger numbers: nums = [1000000000,2000000000,3000000000], target = 5000000000 should return [1, 2]', () => {
    expect(twoSum([1000000000, 2000000000, 3000000000], 5000000000)).toEqual([1, 2]);
});

test('Array with duplicates: nums = [1, 2, 3, 4, 4], target = 8 should return [3, 4]', () => {
    expect(twoSum([1, 2, 3, 4, 4], 8)).toEqual([3, 4]);
});

test('Edge case: nums = [5, 5], target = 10 should return [0, 1]', () => {
    expect(twoSum([5, 5], 10)).toEqual([0, 1]);
});
