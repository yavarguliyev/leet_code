const isPowerOfThree = require('./index');

describe('isPowerOfThree', () => {
    test('should return true for powers of three', () => {
        expect(isPowerOfThree(1)).toBe(true);   // 3^0
        expect(isPowerOfThree(3)).toBe(true);   // 3^1
        expect(isPowerOfThree(9)).toBe(true);   // 3^2
        expect(isPowerOfThree(27)).toBe(true);  // 3^3
        expect(isPowerOfThree(81)).toBe(true);  // 3^4
        expect(isPowerOfThree(243)).toBe(true); // 3^5
    });

    test('should return false for non-powers of three', () => {
        expect(isPowerOfThree(0)).toBe(false);   // Not a power of three
        expect(isPowerOfThree(-1)).toBe(false);  // Not a power of three
        expect(isPowerOfThree(2)).toBe(false);   // Not a power of three
        expect(isPowerOfThree(4)).toBe(false);   // Not a power of three
        expect(isPowerOfThree(5)).toBe(false);   // Not a power of three
        expect(isPowerOfThree(10)).toBe(false);  // Not a power of three
        expect(isPowerOfThree(20)).toBe(false);  // Not a power of three
        expect(isPowerOfThree(26)).toBe(false);  // Not a power of three
        expect(isPowerOfThree(30)).toBe(false);  // Not a power of three
    });

    test('should handle edge cases', () => {
        expect(isPowerOfThree(1)).toBe(true);  // Edge case: 3^0 = 1
        expect(isPowerOfThree(3)).toBe(true);  // Edge case: 3^1 = 3
        expect(isPowerOfThree(27)).toBe(true); // Edge case: 3^3 = 27
        expect(isPowerOfThree(28)).toBe(false); // Edge case: 28 is not a power of three
    });
});
