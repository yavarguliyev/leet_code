const moveZeroes = require('./index');

// Unit tests
describe('moveZeroes', () => {
    test('should move zeros to the end for input [0, 1, 0, 3, 12]', () => {
        const nums = [0, 1, 0, 3, 12];
        moveZeroes(nums);
        expect(nums).toEqual([1, 3, 12, 0, 0]);
    });

    test('should return [0] for input [0]', () => {
        const nums = [0];
        moveZeroes(nums);
        expect(nums).toEqual([0]);
    });

    test('should return [1, 2, 0, 0, 0] for input [0, 1, 0, 2, 0]', () => {
        const nums = [0, 1, 0, 2, 0];
        moveZeroes(nums);
        expect(nums).toEqual([1, 2, 0, 0, 0]);
    });

    test('should return [1, 2, 3, 0, 0] for input [1, 0, 2, 0, 3]', () => {
        const nums = [1, 0, 2, 0, 3];
        moveZeroes(nums);
        expect(nums).toEqual([1, 2, 3, 0, 0]);
    });

    test('should return [0, 0, 0] for input [0, 0, 0]', () => {
        const nums = [0, 0, 0];
        moveZeroes(nums);
        expect(nums).toEqual([0, 0, 0]);
    });

    test('should return [1, 2, 3] for input [1, 2, 3]', () => {
        const nums = [1, 2, 3];
        moveZeroes(nums);
        expect(nums).toEqual([1, 2, 3]);
    });
});
