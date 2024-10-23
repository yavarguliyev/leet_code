const minAddToMakeValid = require('./index');

test('Example 1: "())" should return 1', () => {
    expect(minAddToMakeValid("())")).toBe(1);
});

test('Example 2: "(((" should return 3', () => {
    expect(minAddToMakeValid("(((")).toBe(3);
});

test('Balanced string "()()()" should return 0', () => {
    expect(minAddToMakeValid("()()()")).toBe(0);
});

test('Unbalanced with extra closing ")))))" should return 5', () => {
    expect(minAddToMakeValid(")))))")).toBe(5);
});

test('Unbalanced with extra opening "((((" should return 4', () => {
    expect(minAddToMakeValid("((((")).toBe(4);
});

test('Mixed unbalanced "((())(()" should return 2', () => {
    expect(minAddToMakeValid("((())(()")).toBe(2);
});

test('Edge case: Empty string "" should return 0', () => {
    expect(minAddToMakeValid("")).toBe(0);
});

test('Single closing parenthesis ")" should return 1', () => {
    expect(minAddToMakeValid(")")).toBe(1);
});

test('Single opening parenthesis "(" should return 1', () => {
    expect(minAddToMakeValid("(")).toBe(1);
});

test('Mixed case "()(()))" should return 1', () => {
    expect(minAddToMakeValid("()(()))")).toBe(1);
});
