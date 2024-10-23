const reverseBits = require('./index');

describe('reverseBits', () => {
    test('should return 964176192 for input 43261596', () => {
        expect(reverseBits(43261596)).toBe(964176192);
    });

    test('should return 3221225471 for input 4294967293', () => {
        expect(reverseBits(4294967293)).toBe(3221225471);
    });

    test('should return 0 for input 0', () => {
        expect(reverseBits(0)).toBe(0);
    });

    test('should return 1 for input 2147483648', () => {
        expect(reverseBits(2147483648)).toBe(1);
    });

    // This test now accurately reflects the result of reversing bits of 3
    test('should return 3221225472 for input 3', () => {
        expect(reverseBits(3)).toBe(3221225472);
    });
});
