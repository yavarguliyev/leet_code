const letterCombinations = require('./index');

describe('letterCombinations', () => {
    test('should return ["ad","ae","af","bd","be","bf","cd","ce","cf"] for input "23"', () => {
        const digits = "23";
        const result = letterCombinations(digits);
        expect(result).toEqual(["ad","ae","af","bd","be","bf","cd","ce","cf"]);
    });

    test('should return [] for input ""', () => {
        const digits = "";
        const result = letterCombinations(digits);
        expect(result).toEqual([]);
    });

    test('should return ["a","b","c"] for input "2"', () => {
        const digits = "2";
        const result = letterCombinations(digits);
        expect(result).toEqual(["a", "b", "c"]);
    });

    test('should return ["p","q","r","s"] for input "7"', () => {
        const digits = "7";
        const result = letterCombinations(digits);
        expect(result).toEqual(["p", "q", "r", "s"]);
    });
});
