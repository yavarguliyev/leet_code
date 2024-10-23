const threeSum = require('./index');

describe('threeSum', () => {
    test('should return [[-1,-1,2],[-1,0,1]] for input [-1,0,1,2,-1,-4]', () => {
        const nums = [-1, 0, 1, 2, -1, -4];
        const result = threeSum(nums);
        expect(result).toEqual([[-1, -1, 2], [-1, 0, 1]]);
    });

    test('should return [] for input [0,1,1]', () => {
        const nums = [0, 1, 1];
        const result = threeSum(nums);
        expect(result).toEqual([]);
    });

    test('should return [[0,0,0]] for input [0,0,0]', () => {
        const nums = [0, 0, 0];
        const result = threeSum(nums);
        expect(result).toEqual([[0, 0, 0]]);
    });

    test('should return [[-2,0,2],[-2,1,1]] for input [-2,0,1,1,2]', () => {
        const nums = [-2, 0, 1, 1, 2];
        const result = threeSum(nums);
        expect(result).toEqual([[-2, 0, 2], [-2, 1, 1]]);
    });
});
