const subsets = require('./index');

describe('subsets', () => {
    test('Example 1', () => {
        const nums = [1, 2, 3];
        const output = subsets(nums);
        const expectedOutput = [
            [], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]
        ];
        expectedOutput.forEach(expectedSubset => {
            expect(output).toEqual(expect.arrayContaining([expectedSubset]));
        });
    });

    test('Example 2', () => {
        const nums = [0];
        const output = subsets(nums);
        const expectedOutput = [[], [0]];
        expectedOutput.forEach(expectedSubset => {
            expect(output).toEqual(expect.arrayContaining([expectedSubset]));
        });
    });

    test('Empty array', () => {
        const nums = [];
        const output = subsets(nums);
        expect(output).toEqual([[]]);
    });

    test('Single element', () => {
        const nums = [5];
        const output = subsets(nums);
        expect(output).toEqual([[], [5]]);
    });

    test('Two elements', () => {
        const nums = [1, 2];
        const output = subsets(nums);
        const expectedOutput = [[], [1], [2], [1, 2]];
        
        // Check if all expected subsets are present in the output
        expectedOutput.forEach(expectedSubset => {
            expect(output).toEqual(expect.arrayContaining([expectedSubset]));
        });
    });
});
