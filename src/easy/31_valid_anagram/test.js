const isAnagram = require('./index');

describe('isAnagram', () => {
    test('should return true for valid anagrams', () => {
        expect(isAnagram("anagram", "nagaram")).toBe(true);
        expect(isAnagram("abc", "cba")).toBe(true);
        expect(isAnagram("你好", "好你")).toBe(true);
        expect(isAnagram("listen", "silent")).toBe(true);
        expect(isAnagram("rat", "tar")).toBe(true);
    });

    test('should return false for non-anagrams', () => {
        expect(isAnagram("rat", "car")).toBe(false);
        expect(isAnagram("hello", "world")).toBe(false);
        expect(isAnagram("abc", "def")).toBe(false);
        expect(isAnagram("a", "aa")).toBe(false);
        expect(isAnagram("abcd", "abc")).toBe(false);
    });

    test('should return false for strings of different lengths', () => {
        expect(isAnagram("abc", "ab")).toBe(false);
        expect(isAnagram("a", "b")).toBe(false);
        expect(isAnagram("", "nonempty")).toBe(false);
        expect(isAnagram("nonempty", "")).toBe(false);
    });

    test('should handle special characters and spaces', () => {
        expect(isAnagram("a b c", "c b a")).toBe(true);
        expect(isAnagram("a!b@c", "c@b!a")).toBe(true);
        expect(isAnagram("a b", "ab")).toBe(false);
    });
});
