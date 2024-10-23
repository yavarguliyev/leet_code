const reverseString = require('./index');

describe('reverseString', () => {
    test('reverses a typical string', () => {
        const input = ["h", "e", "l", "l", "o"];
        reverseString(input);
        expect(input).toEqual(["o", "l", "l", "e", "h"]);
    });

    test('reverses a palindrome', () => {
        const input = ["r", "a", "c", "e", "c", "a", "r"];
        reverseString(input);
        expect(input).toEqual(["r", "a", "c", "e", "c", "a", "r"]);
    });

    test('handles single character', () => {
        const input = ["a"];
        reverseString(input);
        expect(input).toEqual(["a"]);
    });

    test('handles empty array', () => {
        const input = [];
        reverseString(input);
        expect(input).toEqual([]);
    });

    test('reverses even length array', () => {
        const input = ["a", "b", "c", "d"];
        reverseString(input);
        expect(input).toEqual(["d", "c", "b", "a"]);
    });

    test('reverses longer even length array', () => {
        const input = ["e", "x", "a", "m", "p", "l", "e"];
        reverseString(input);
        expect(input).toEqual(["e", "l", "p", "m", "a", "x", "e"]);
    });

    test('reverses odd length array', () => {
        const input = ["H", "a", "n", "n", "a", "h"];
        reverseString(input);
        expect(input).toEqual(["h", "a", "n", "n", "a", "H"]);
    });
});
