const divide = require('./index');

describe('Integer Division without Multiplication/Division/Mod', () => {
    test('10 divided by 3 should return 3', () => {
        expect(divide(10, 3)).toBe(3);
    });

    test('7 divided by -3 should return -2', () => {
        expect(divide(7, -3)).toBe(-2);
    });

    test('-10 divided by -3 should return 3', () => {
        expect(divide(-10, -3)).toBe(3);
    });

    test('-10 divided by 3 should return -3', () => {
        expect(divide(-10, 3)).toBe(-3);
    });

    test('0 divided by 1 should return 0', () => {
        expect(divide(0, 1)).toBe(0);
    });

    test('Dividing by 1 should return the dividend', () => {
        expect(divide(10, 1)).toBe(10);
    });

    test('Dividing by -1 should return negative dividend', () => {
        expect(divide(10, -1)).toBe(-10);
    });

    test('Dividing the minimum 32-bit integer by -1 should return 2^31 - 1', () => {
        expect(divide(-Math.pow(2, 31), -1)).toBe(Math.pow(2, 31) - 1);
    });

    test('Dividing the maximum 32-bit integer by 1 should return 2^31 - 1', () => {
        expect(divide(Math.pow(2, 31) - 1, 1)).toBe(Math.pow(2, 31) - 1);
    });

    test.skip('Dividing the maximum 32-bit integer by -1 should return -2^31', () => {
        expect(divide(Math.pow(2, 31) - 1, -1)).toBe(-Math.pow(2, 31));
    });

    test('Dividing 5 by 2 should return 2', () => {
        expect(divide(5, 2)).toBe(2);
    });

    test('Dividing 1 by 2 should return 0', () => {
        expect(divide(1, 2)).toBe(0);
    });

    test('Dividing -1 by -1 should return 1', () => {
        expect(divide(-1, -1)).toBe(1);
    });

    test('Dividing 15 by 3 should return 5', () => {
        expect(divide(15, 3)).toBe(5);
    });

    test('Dividing -15 by 3 should return -5', () => {
        expect(divide(-15, 3)).toBe(-5);
    });

    test('Dividing -15 by -3 should return 5', () => {
        expect(divide(-15, -3)).toBe(5);
    });
});
