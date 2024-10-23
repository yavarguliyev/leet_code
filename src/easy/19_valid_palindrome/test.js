const isPalindrome = require('./index');

describe('isPalindrome', () => {
    test('should return true for "A man, a plan, a canal: Panama"', () => {
        expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
    });

    test('should return false for "race a car"', () => {
        expect(isPalindrome("race a car")).toBe(false);
    });

    test('should return true for an empty string', () => {
        expect(isPalindrome("")).toBe(true);
    });

    test('should return true for a string with only non-alphanumeric characters', () => {
        expect(isPalindrome(".,,,")).toBe(true);
    });

    test('should return true for a string that is already a palindrome', () => {
        expect(isPalindrome("madam")).toBe(true);
    });

    test('should return false for "hello"', () => {
        expect(isPalindrome("hello")).toBe(false);
    });

    test('should return true for a numeric palindrome', () => {
        expect(isPalindrome("12321")).toBe(true);
    });

    test('should return false for a numeric non-palindrome', () => {
        expect(isPalindrome("12345")).toBe(false);
    });
});
