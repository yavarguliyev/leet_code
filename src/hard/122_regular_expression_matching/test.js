const isMatch = require('./index');

describe('Regular Expression Matching', () => {
    test('Example 1: "aa" does not match "a"', () => {
        expect(isMatch("aa", "a")).toBe(false);
    });

    test('Example 2: "aa" matches "a*"', () => {
        expect(isMatch("aa", "a*")).toBe(true);
    });

    test('Example 3: "ab" matches ".*"', () => {
        expect(isMatch("ab", ".*")).toBe(true);
    });

    test('Edge case: empty string matches empty pattern', () => {
        expect(isMatch("", "")).toBe(true);
    });

    test('Edge case: "abc" matches "a.c"', () => {
        expect(isMatch("abc", "a.c")).toBe(true);
    });

    test('Edge case: "abbb" matches "ab*"', () => {
        expect(isMatch("abbb", "ab*")).toBe(true);
    });

    test('Edge case: "abcd" does not match "d*"', () => {
        expect(isMatch("abcd", "d*")).toBe(false);
    });

    test('Edge case: "aab" matches "c*a*b"', () => {
        expect(isMatch("aab", "c*a*b")).toBe(true);
    });

    test('Complex pattern: "mississippi" does not match "mis*is*p*."', () => {
        expect(isMatch("mississippi", "mis*is*p*.")).toBe(false);
    });
});
