const firstUniqChar = require('./index');

describe('firstUniqChar', () => {
    test('returns the index of the first non-repeating character', () => {
        expect(firstUniqChar("leetcode")).toBe(0); // 'l' is the first non-repeating character
    });

    test('returns the index of the first non-repeating character in a longer string', () => {
        expect(firstUniqChar("loveleetcode")).toBe(2); // 'v' is the first non-repeating character
    });

    test('returns -1 when all characters are repeating', () => {
        expect(firstUniqChar("aabb")).toBe(-1); // No non-repeating character
    });

    test('returns the index for a string with only one character', () => {
        expect(firstUniqChar("z")).toBe(0); // Single character is non-repeating
    });

    test('returns the index of the first unique character when it is at the end', () => {
        expect(firstUniqChar("aabbccddeef")).toBe(10); // 'f' is the first non-repeating character
    });

    test('returns the index of the first unique character in an empty string', () => {
        expect(firstUniqChar("")).toBe(-1); // No characters present
    });
});
