const hammingWeight = require('./index');

describe('Hamming Weight', () => {
    test('should return 3 for input 11', () => {
        expect(hammingWeight(11)).toBe(3);
    });

    test('should return 1 for input 128', () => {
        expect(hammingWeight(128)).toBe(1);
    });

    test('should return 30 for input 2147483645', () => {
        expect(hammingWeight(2147483645)).toBe(30);
    });

    test('should return 0 for input 0', () => {
        expect(hammingWeight(0)).toBe(0);
    });

    test('should return 32 for input 4294967295', () => {
        expect(hammingWeight(4294967295)).toBe(32); // All bits set
    });

    test('should return 16 for input 65535', () => {
        expect(hammingWeight(65535)).toBe(16); // 16 bits set in 0xFFFF
    });

    test('should return 1 for input 1', () => {
        expect(hammingWeight(1)).toBe(1);
    });

    test('should return 2 for input 6', () => {
        expect(hammingWeight(6)).toBe(2); // 110 in binary
    });
});