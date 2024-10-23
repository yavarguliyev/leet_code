const numDecodings = require('./index');

describe('Number of Decodings', () => {
    test('should return 2 for input "12"', () => {
        expect(numDecodings("12")).toBe(2);
    });

    test('should return 3 for input "226"', () => {
        expect(numDecodings("226")).toBe(3);
    });

    test('should return 0 for input "06"', () => {
        expect(numDecodings("06")).toBe(0);
    });

    test('should return 1 for input "10"', () => {
        expect(numDecodings("10")).toBe(1);
    });

    test('should return 1 for input "01"', () => {
        expect(numDecodings("01")).toBe(0);
    });

    test('should return 0 for input with leading zero "012"', () => {
        expect(numDecodings("012")).toBe(0);
    });

    test('should return 1 for input "27"', () => {
        expect(numDecodings("27")).toBe(1);
    });

    test('should return 1 for input "111"', () => {
        expect(numDecodings("111")).toBe(3);
    });

    test('should return 0 for input "000"', () => {
        expect(numDecodings("000")).toBe(0);
    });

    test('should return 1 for input "123456"', () => {
        expect(numDecodings("123456")).toBe(3);
    });
});
