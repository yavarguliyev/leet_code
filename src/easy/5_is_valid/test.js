const isValid = require('./index');

test('Example 1: "()" should return true', () => {
    expect(isValid("()")).toBe(true);
});

test('Example 2: "()[]{}" should return true', () => {
    expect(isValid("()[]{}")).toBe(true);
});

test('Example 3: "(]" should return false', () => {
    expect(isValid("(]")).toBe(false);
});

test('Example 4: "([])" should return true', () => {
    expect(isValid("([])")).toBe(true);
});

test('Edge case: "([)]" should return false', () => {
    expect(isValid("([)]")).toBe(false);
});

test('Edge case: "(((" should return false', () => {
    expect(isValid("(((")).toBe(false);
});

test('Edge case: "[({})]" should return true', () => {
    expect(isValid("[({})]")).toBe(true);
});
