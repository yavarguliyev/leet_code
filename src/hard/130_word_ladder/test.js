const ladderLength = require('./index');

describe('Word Ladder Length', () => {
    test('Example 1', () => {
        const beginWord = "hit";
        const endWord = "cog";
        const wordList = ["hot", "dot", "dog", "lot", "log", "cog"];
        expect(ladderLength(beginWord, endWord, wordList)).toBe(5);
    });

    test('Example 2', () => {
        const beginWord = "hit";
        const endWord = "cog";
        const wordList = ["hot", "dot", "dog", "lot", "log"];
        expect(ladderLength(beginWord, endWord, wordList)).toBe(0);
    });

    test('No transformation', () => {
        const beginWord = "a";
        const endWord = "c";
        const wordList = ["b"];
        expect(ladderLength(beginWord, endWord, wordList)).toBe(0);
    });

    test('Transformation exists', () => {
        const beginWord = "qa";
        const endWord = "zz";
        const wordList = ["za", "zb", "zc", "zd", "ze", "zf", "zg", "zh", "zi", "zj", "zk", "zl", "zm", "zn", "zo", "zp", "zq", "zr", "zs", "zt", "zu", "zv", "zw", "zx", "zy", "zz"];
        expect(ladderLength(beginWord, endWord, wordList)).toBe(3); // qa -> za -> zz
    });
});
