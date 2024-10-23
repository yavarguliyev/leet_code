const isHappy = require('./index');

describe('Happy Number', () => {
    test('should return true for input 19', () => {
        expect(isHappy(19)).toBe(true);
    });

    test('should return false for input 2', () => {
        expect(isHappy(2)).toBe(false);
    });

    test('should return true for input 7', () => {
        expect(isHappy(7)).toBe(true);
    });

    test('should return false for input 4', () => {
        expect(isHappy(4)).toBe(false);
    });

    test('should return true for input 1', () => {
        expect(isHappy(1)).toBe(true);
    });

    test('should return true for input 32', () => {
        expect(isHappy(32)).toBe(true);
    });
});
