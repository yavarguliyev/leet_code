const canJump = require('./index');

describe('canJump', () => {
    test('returns true for reachable last index', () => {
        expect(canJump([2, 3, 1, 1, 4])).toBe(true);
        expect(canJump([1, 2, 3])).toBe(true);
        expect(canJump([2, 0, 0])).toBe(true);
    });

    test('returns false for unreachable last index', () => {
        expect(canJump([3, 2, 1, 0, 4])).toBe(false);
        expect(canJump([0, 1, 2, 3, 4])).toBe(false);
        expect(canJump([2, 0, 1, 0])).toBe(true);
    });

    test('returns true for single element array', () => {
        expect(canJump([0])).toBe(true);
    });

    test('returns true for array with all elements being 0 except the first', () => {
        expect(canJump([1, 0, 0, 0, 0])).toBe(false);
    });
});
