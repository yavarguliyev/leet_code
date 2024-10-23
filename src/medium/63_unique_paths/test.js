const uniquePaths = require('./index');

describe('uniquePaths', () => {
    test('Example 1', () => {
        expect(uniquePaths(3, 7)).toBe(28);
    });

    test('Example 2', () => {
        expect(uniquePaths(3, 2)).toBe(3);
    });

    test('Single cell grid', () => {
        expect(uniquePaths(1, 1)).toBe(1); // Only one way to stay in place
    });

    test('Single row grid', () => {
        expect(uniquePaths(1, 5)).toBe(1); // Only one way to move right
    });

    test('Single column grid', () => {
        expect(uniquePaths(5, 1)).toBe(1); // Only one way to move down
    });

    test('2x2 grid', () => {
        expect(uniquePaths(2, 2)).toBe(2); // Two paths: right then down, or down then right
    });

    test('3x3 grid', () => {
        expect(uniquePaths(3, 3)).toBe(6); // Six paths in a 3x3 grid
    });

    test('5x5 grid', () => {
        expect(uniquePaths(5, 5)).toBe(70); // Paths calculated through combinatorial approach
    });

    test('10x10 grid', () => {
        expect(uniquePaths(10, 10)).toBe(48620); // Larger grid to check combinatorial paths
    });
});