const minWindow = require('./index');

describe('Minimum Window Substring', () => {
    test('Basic example 1', () => {
        expect(minWindow("ADOBECODEBANC", "ABC")).toBe("BANC");
    });

    test('Basic example 2', () => {
        expect(minWindow("a", "a")).toBe("a");
    });

    test('Basic example 3', () => {
        expect(minWindow("a", "aa")).toBe("");
    });

    test('Another case with overlapping characters', () => {
        expect(minWindow("AA", "AA")).toBe("AA");
    });

    test('Case with no valid window', () => {
        expect(minWindow("aabbcc", "xyz")).toBe("");
    });

    test('Complex case', () => {
        expect(minWindow("cabwefgewcwaefg", "cae")).toBe("cwae");
    });

    test('Window includes duplicates', () => {
        expect(minWindow("AABBC", "ABC")).toBe("ABBC");
    });

    test('Window at the end of string', () => {
        expect(minWindow("ADOBECODEBANC", "AABC")).toBe("ADOBECODEBA");
    });
});
