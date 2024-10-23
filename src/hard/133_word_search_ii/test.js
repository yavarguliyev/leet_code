const { findWords } = require('./index');

describe('findWords', () => {
    it('should return words found on the board', () => {
        const board = [
            ["o", "a", "a", "n"],
            ["e", "t", "a", "e"],
            ["i", "h", "k", "r"],
            ["i", "f", "l", "v"]
        ];
        const words = ["oath", "pea", "eat", "rain"];
        const expectedOutput = ["eat", "oath"];
        
        const result = findWords(board, words);
        expect(result.sort()).toEqual(expectedOutput.sort()); // Sort for order independence
    });

    it('should return an empty array if no words are found', () => {
        const board = [
            ["a", "b"],
            ["c", "d"]
        ];
        const words = ["abcb"];
        
        const result = findWords(board, words);
        expect(result).toEqual([]);
    });

    it('should handle the case with overlapping words', () => {
        const board = [
            ["a", "a", "a", "a"],
            ["a", "a", "a", "a"],
            ["a", "a", "a", "a"]
        ];
        const words = ["aaaaaaa", "aaaaaa", "aaaaa", "aaaa"];
        
        const result = findWords(board, words);
        expect(result.sort()).toEqual(["aaaa", "aaaaa", "aaaaaa", "aaaaaaa"].sort());
    });

    it('should return all words that can be formed', () => {
        const board = [
            ["o", "a", "b", "c"],
            ["e", "t", "a", "e"],
            ["i", "h", "k", "r"],
            ["i", "f", "l", "v"]
        ];
        const words = ["oath", "bat", "eat", "bee", "hat"];
        const expectedOutput = ["eat", "oath", "bat"];
        
        const result = findWords(board, words);
        expect(result.sort()).toEqual(expectedOutput.sort());
    });

    it('should return words found with varying lengths', () => {
        const board = [
            ["t", "h", "i", "s"],
            ["a", "t", "e", "s"],
            ["t", "r", "e", "e"],
            ["a", "t", "e", "s"]
        ];
        const words = ["this", "that", "tree", "ate"];
        const expectedOutput = ["this", "tree", "ate"];
        
        const result = findWords(board, words);
        expect(result.sort()).toEqual(expectedOutput.sort());
    });
});
