const searchRange = require('./index');

describe('searchRange', () => {
    test('should return [3, 4] for input [5,7,7,8,8,10] and target 8', () => {
        expect(searchRange([5,7,7,8,8,10], 8)).toEqual([3, 4]);
    });

    test('should return [-1, -1] for input [5,7,7,8,8,10] and target 6', () => {
        expect(searchRange([5,7,7,8,8,10], 6)).toEqual([-1, -1]);
    });

    test('should return [-1, -1] for an empty array and target 0', () => {
        expect(searchRange([], 0)).toEqual([-1, -1]);
    });

    test('should return [0, 0] for input [1] and target 1', () => {
        expect(searchRange([1], 1)).toEqual([0, 0]);
    });

    test('should return [0, 1] for input [2, 2] and target 2', () => {
        expect(searchRange([2, 2], 2)).toEqual([0, 1]);
    });

    test('should return [-1, -1] for input [1, 3] and target 2', () => {
        expect(searchRange([1, 3], 2)).toEqual([-1, -1]);
    });

    test('should return [1, 3] for input [1, 1, 2, 2, 2, 2, 3] and target 2', () => {
        expect(searchRange([1, 1, 2, 2, 2, 2, 3], 2)).toEqual([2, 5]);
    });

    test('should return [0, 0] for input [0] and target 0', () => {
        expect(searchRange([0], 0)).toEqual([0, 0]);
    });
});