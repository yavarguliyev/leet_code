const strStr = require('./index');

describe('strStr', () => {
    test('should return the index of the first occurrence of needle in haystack', () => {
        expect(strStr("sadbutsad", "sad")).toBe(0);
        expect(strStr("leetcode", "leeto")).toBe(-1);
        expect(strStr("hello", "ll")).toBe(2);
        expect(strStr("mississippi", "issip")).toBe(4);
        expect(strStr("abcdefg", "xyz")).toBe(-1);
    });

    test('should handle edge cases', () => {
        expect(strStr("", "")).toBe(0); // Both empty strings
        expect(strStr("a", "a")).toBe(0); // Single character match
        expect(strStr("abc", "c")).toBe(2); // Match at the end
        expect(strStr("aaaaa", "bba")).toBe(-1); // No match
    });

    test('should return -1 when needle is longer than haystack', () => {
        expect(strStr("short", "longer")).toBe(-1);
        expect(strStr("abc", "abcdef")).toBe(-1);
    });

    test('should return the correct index for multiple occurrences', () => {
        expect(strStr("sadbutsad", "sad")).toBe(0); // First occurrence
        expect(strStr("sadbutsad", "but")).toBe(3); // First occurrence
        expect(strStr("abababab", "bab")).toBe(1); // Overlapping occurrences
    });

    test('should return -1 for needle that does not exist', () => {
        expect(strStr("abcdefgh", "ijkl")).toBe(-1); // No match
        expect(strStr("xyz", "abc")).toBe(-1); // No match
    });
});
