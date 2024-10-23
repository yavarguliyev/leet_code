const generateParenthesis = require('./index');

describe('generateParenthesis', () => {
    test('should generate all valid combinations for n = 3', () => {
        const result = generateParenthesis(3);
        const expected = ["((()))", "(()())", "(())()", "()(())", "()()()"];
        expect(result.sort()).toEqual(expected.sort());
    });

    test('should generate all valid combinations for n = 1', () => {
        const result = generateParenthesis(1);
        const expected = ["()"];
        expect(result).toEqual(expected);
    });

    test('should generate all valid combinations for n = 2', () => {
        const result = generateParenthesis(2);
        const expected = ["(())", "()()"];
        expect(result.sort()).toEqual(expected.sort());
    });

    test('should generate all valid combinations for n = 4', () => {
        const result = generateParenthesis(4);
        const expected = ["(((())))","((()()))","((())())","((()))()","(()(()))","(()()())","(()())()","(())(())","(())()()","()((()))","()(()())","()(())()","()()(())","()()()()"];
        expect(result.sort()).toEqual(expected.sort());
    });
});
