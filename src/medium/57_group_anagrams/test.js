const groupAnagrams = require('./index');

describe('groupAnagrams', () => {
    test('groups anagrams together', () => {
        const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
        const result = groupAnagrams(input);
        expect(result).toEqual(expect.arrayContaining([
            expect.arrayContaining(["eat", "tea", "ate"]),
            expect.arrayContaining(["tan", "nat"]),
            expect.arrayContaining(["bat"]),
        ]));
    });

    test('handles empty string', () => {
        const input = [""];
        const result = groupAnagrams(input);
        expect(result).toEqual([[""]]);
    });

    test('handles single character', () => {
        const input = ["a"];
        const result = groupAnagrams(input);
        expect(result).toEqual([["a"]]);
    });

    test('handles multiple anagrams', () => {
        const input = ["rat", "tar", "art"];
        const result = groupAnagrams(input);
        expect(result).toEqual(expect.arrayContaining([
            expect.arrayContaining(["rat", "tar", "art"]),
        ]));
    });

    test('handles no anagrams', () => {
        const input = ["abc", "def", "ghi"];
        const result = groupAnagrams(input);
        expect(result).toEqual([
            ["abc"],
            ["def"],
            ["ghi"]
        ]);
    });
});