const myPow = require('./index');

describe('myPow', () => {
    test('calculates positive powers', () => {
        expect(myPow(2.00000, 10)).toBeCloseTo(1024.00000);
        expect(myPow(2.10000, 3)).toBeCloseTo(9.26100);
    });

    test('calculates negative powers', () => {
        expect(myPow(2.00000, -2)).toBeCloseTo(0.25000);
        expect(myPow(3.00000, -3)).toBeCloseTo(0.037037);
    });

    test('handles base cases', () => {
        expect(myPow(1.00000, 10)).toBe(1);
        expect(myPow(0.00000, 0)).toBe(1);
    });

    test('handles edge cases', () => {
        expect(myPow(-2.00000, 3)).toBe(-8.00000);
        expect(myPow(-2.00000, -2)).toBe(0.25);
    });
});