const exist = require('./index');

describe('Word Search', () => {
    test('should return true for word ABCCED', () => {
        const board = [
            ["A", "B", "C", "E"],
            ["S", "F", "C", "S"],
            ["A", "D", "E", "E"]
        ];
        const word = "ABCCED";
        expect(exist(board, word)).toBe(true);
    });

    test('should return true for word SEE', () => {
        const board = [
            ["A", "B", "C", "E"],
            ["S", "F", "C", "S"],
            ["A", "D", "E", "E"]
        ];
        const word = "SEE";
        expect(exist(board, word)).toBe(true);
    });

    test('should return false for word ABCB', () => {
        const board = [
            ["A", "B", "C", "E"],
            ["S", "F", "C", "S"],
            ["A", "D", "E", "E"]
        ];
        const word = "ABCB";
        expect(exist(board, word)).toBe(false);
    });

    test('should return true for single character word A', () => {
        const board = [
            ["A"]
        ];
        const word = "A";
        expect(exist(board, word)).toBe(true);
    });

    test('should return false for single character word B in single character A board', () => {
        const board = [
            ["A"]
        ];
        const word = "B";
        expect(exist(board, word)).toBe(false);
    });

    test('should return true for complex board with longer word', () => {
        const board = [
            ["A", "A", "A", "A"],
            ["A", "A", "A", "A"],
            ["A", "A", "A", "A"],
            ["A", "A", "A", "A"]
        ];
        const word = "AAAA";
        expect(exist(board, word)).toBe(true);
    });

    test('should return false for word that cannot be formed', () => {
        const board = [
            ["A", "B"],
            ["C", "D"]
        ];
        const word = "ACD";
        expect(exist(board, word)).toBe(true);
    });

    test('should return true for circular word with correct path', () => {
        const board = [
            ["A", "B", "C", "E"],
            ["S", "F", "C", "S"],
            ["A", "D", "E", "E"]
        ];
        const word = "ABCCED";
        expect(exist(board, word)).toBe(true);
    });

    test('should return true for diagonal word that zig-zags', () => {
        const board = [
            ["A", "B", "C", "E"],
            ["S", "F", "C", "S"],
            ["A", "D", "E", "E"]
        ];
        const word = "ABCCED";
        expect(exist(board, word)).toBe(true);
    });
});
