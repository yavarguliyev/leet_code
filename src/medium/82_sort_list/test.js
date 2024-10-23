const maxArea = require('./index');

describe('maxArea', () => {
    test('should return 49 for input [1,8,6,2,5,4,8,3,7]', () => {
        const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
        expect(maxArea(height)).toBe(49);
    });

    test('should return 1 for input [1,1]', () => {
        const height = [1, 1];
        expect(maxArea(height)).toBe(1);
    });

    test('should return 0 for input [0,0]', () => {
        const height = [0, 0];
        expect(maxArea(height)).toBe(0);
    });

    test('should return 16 for input [4,3,2,1,4]', () => {
        const height = [4, 3, 2, 1, 4];
        expect(maxArea(height)).toBe(16);
    });

    test('should return 2 for input [1,2,1]', () => {
        const height = [1, 2, 1];
        expect(maxArea(height)).toBe(2);
    });

    test('should return 20000 for input with large values [1,10000,1,10000,1]', () => {
        const height = [1, 10000, 1, 10000, 1];
        expect(maxArea(height)).toBe(20000);
    });

    test('should return 0 for an empty array', () => {
        const height = [];
        expect(maxArea(height)).toBe(0);
    });

    test('should return 0 for input with one line [5]', () => {
        const height = [5];
        expect(maxArea(height)).toBe(0);
    });

    test('should handle large input sizes efficiently', () => {
        const height = new Array(100000).fill(1);
        expect(maxArea(height)).toBe(99999);
    });
});
