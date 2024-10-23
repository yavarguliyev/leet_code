const titleToNumber = require('./index');

describe('titleToNumber', () => {
    test('should return 1 for column title "A"', () => {
        expect(titleToNumber("A")).toBe(1);
    });

    test('should return 28 for column title "AB"', () => {
        expect(titleToNumber("AB")).toBe(28);
    });

    test('should return 701 for column title "ZY"', () => {
        expect(titleToNumber("ZY")).toBe(701);
    });

    test('should return 27 for column title "AA"', () => {
        expect(titleToNumber("AA")).toBe(27);
    });

    test('should return 52 for column title "AZ"', () => {
        expect(titleToNumber("AZ")).toBe(52);
    });

    test('should return 705 for column title "AAC"', () => {
        expect(titleToNumber("AAC")).toBe(705);
    });

    test('should return 703 for column title "AAA"', () => {
        expect(titleToNumber("AAA")).toBe(703);
    });

    test('should return 16384 for column title "XFD"', () => {
        expect(titleToNumber("XFD")).toBe(16384);
    });
});
