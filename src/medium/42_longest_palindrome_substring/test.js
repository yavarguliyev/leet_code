const longestPalindrome = require('./index');

test('should return "bab" for input "babad"', () => {
    const s = "babad";
    const result = longestPalindrome(s);
    expect(result === "bab" || result === "aba").toBe(true);
});

test('should return "bb" for input "cbbd"', () => {
    const s = "cbbd";
    const result = longestPalindrome(s);
    expect(result).toBe("bb");
});

test('should return "a" for input "a"', () => {
    const s = "a";
    const result = longestPalindrome(s);
    expect(result).toBe("a");
});

test('should return "a" or "c" for input "ac"', () => {
    const s = "ac";
    const result = longestPalindrome(s);
    expect(result === "a" || result === "c").toBe(true);
});

test('should return "ccc" for input "ccc"', () => {
    const s = "ccc";
    const result = longestPalindrome(s);
    expect(result).toBe("ccc");
});
