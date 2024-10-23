const isMatch = require('./index');

describe('Wildcard Pattern Matching', () => {
    test('Exact match without wildcards', () => {
        expect(isMatch("aa", "a")).toBe(false);
    });

    test('Match with wildcard *', () => {
        expect(isMatch("aa", "*")).toBe(true);
    });

    test('Match with single wildcard ?', () => {
        expect(isMatch("cb", "?a")).toBe(false);
    });

    test('Match with complex pattern containing *', () => {
        expect(isMatch("adceb", "*a*b")).toBe(true);
    });

    test('No match with complex pattern', () => {
        expect(isMatch("acdcb", "a*c?b")).toBe(false);
    });

    test('Empty string and pattern', () => {
        expect(isMatch("", "")).toBe(true);
    });

    test('Empty string matches *', () => {
        expect(isMatch("", "*")).toBe(true);
    });

    test('Pattern only * matches any string', () => {
        expect(isMatch("abc", "*")).toBe(true);
    });

    test('Single character matches single ?', () => {
        expect(isMatch("a", "?")).toBe(true);
    });

    test('No match when pattern is longer', () => {
        expect(isMatch("abc", "abcd")).toBe(false);
    });

    test('Match with multiple *', () => {
        expect(isMatch("aab", "c*a*b")).toBe(false);
    });
});
