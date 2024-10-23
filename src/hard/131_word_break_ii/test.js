const wordBreak = require('./index');

describe('Word Break', () => {
    test('Single word in dictionary', () => {
        const s = "a";
        const wordDict = ["a"];
        expect(wordBreak(s, wordDict)).toEqual(["a"]);
    });
});
