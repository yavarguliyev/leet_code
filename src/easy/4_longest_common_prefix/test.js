const longestCommonPrefix = require('./index');

test('Example 1: ["flower", "flow", "flight"] = "fl"', () => {
    expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl");
});

test('Example 2: ["dog", "racecar", "car"] = ""', () => {
    expect(longestCommonPrefix(["dog", "racecar", "car"])).toBe("");
});

test('Edge case: ["a"] = "a"', () => {
    expect(longestCommonPrefix(["a"])).toBe("a");
});

test('Edge case: ["", "b"] = ""', () => {
    expect(longestCommonPrefix(["", "b"])).toBe("");
});

test('Edge case: ["interspecies", "interstellar", "interstate"] = "inters"', () => {
    expect(longestCommonPrefix(["interspecies", "interstellar", "interstate"])).toBe("inters");
});

test('Edge case: ["ab", "a"] = "a"', () => {
    expect(longestCommonPrefix(["ab", "a"])).toBe("a");
});
