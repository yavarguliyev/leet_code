const permute = require('./index');

describe('permute', () => {
    test('should return all permutations for nums = [1, 2, 3]', () => {
        const input = [1, 2, 3];
        const output = permute(input);
        const expected = [
            [1, 2, 3], [1, 3, 2],
            [2, 1, 3], [2, 3, 1],
            [3, 1, 2], [3, 2, 1]
        ];
        expect(output).toEqual(expect.arrayContaining(expected));
        expect(output.length).toBe(expected.length);
    });

    test('should return all permutations for nums = [0, 1]', () => {
        const input = [0, 1];
        const output = permute(input);
        const expected = [
            [0, 1],
            [1, 0]
        ];
        expect(output).toEqual(expect.arrayContaining(expected));
        expect(output.length).toBe(expected.length);
    });

    test('should return a single permutation for nums = [1]', () => {
        const input = [1];
        const output = permute(input);
        const expected = [[1]];
        expect(output).toEqual(expected);
    });

    test('should return all permutations for nums = [1, 2, 3, 4]', () => {
        const input = [1, 2, 3, 4];
        const output = permute(input);
        expect(output.length).toBe(24); // 4! = 24
    });

    test('should return all permutations for nums = [1, 2, 3, 4, 5]', () => {
        const input = [1, 2, 3, 4, 5];
        const output = permute(input);
        expect(output.length).toBe(120); // 5! = 120
    });

    test('should return all permutations for nums = [1, 2, 3, 4, 5, 6]', () => {
        const input = [1, 2, 3, 4, 5, 6];
        const output = permute(input);
        expect(output.length).toBe(720); // 6! = 720
    });
});
