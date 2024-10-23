const search = require('./index');

describe('search', () => {
    test('should return 4 for input [4,5,6,7,0,1,2] and target 0', () => {
        expect(search([4,5,6,7,0,1,2], 0)).toBe(4);
    });

    test('should return -1 for input [4,5,6,7,0,1,2] and target 3', () => {
        expect(search([4,5,6,7,0,1,2], 3)).toBe(-1);
    });

    test('should return -1 for input [1] and target 0', () => {
        expect(search([1], 0)).toBe(-1);
    });

    test('should return 0 for input [1] and target 1', () => {
        expect(search([1], 1)).toBe(0);
    });

    test('should return 1 for input [3,1] and target 1', () => {
        expect(search([3,1], 1)).toBe(1);
    });

    test('should return 2 for input [6,7,1,2,3,4,5] and target 1', () => {
        expect(search([6,7,1,2,3,4,5], 1)).toBe(2);
    });
});
