const lengthOfLongestSubstring = require('./index');

test('should return 3 for input "abcabcbb"', () => {
    expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
});

test('should return 1 for input "bbbbb"', () => {
    expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
});

test('should return 3 for input "pwwkew"', () => {
    expect(lengthOfLongestSubstring("pwwkew")).toBe(3);
});

test('should return 0 for input ""', () => {
    expect(lengthOfLongestSubstring("")).toBe(0);
});

test('should return 6 for input "abcdef"', () => {
    expect(lengthOfLongestSubstring("abcdef")).toBe(6);
});

test('should return 5 for input "tmmzuxt"', () => {
    expect(lengthOfLongestSubstring("tmmzuxt")).toBe(5);
});
