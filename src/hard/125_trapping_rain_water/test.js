const trap = require('./index');

describe('trap', () => {
    test('Example 1: height = [0,1,0,2,1,0,1,3,2,1,2,1]', () => {
        expect(trap([0,1,0,2,1,0,1,3,2,1,2,1])).toBe(6);
    });

    test('Example 2: height = [4,2,0,3,2,5]', () => {
        expect(trap([4,2,0,3,2,5])).toBe(9);
    });

    test('Single bar: height = [1]', () => {
        expect(trap([1])).toBe(0);
    });

    test('Two bars: height = [1, 1]', () => {
        expect(trap([1, 1])).toBe(0);
    });

    test('No water can be trapped: height = [1, 0, 1]', () => {
        expect(trap([1, 0, 1])).toBe(1);
    });

    test('Mixed heights: height = [0, 2, 0, 1, 0, 3]', () => {
        expect(trap([0, 2, 0, 1, 0, 3])).toBe(5);
    });

    test('Empty input: height = []', () => {
        expect(trap([])).toBe(0);
    });

    test('Flat ground: height = [1, 1, 1, 1]', () => {
        expect(trap([1, 1, 1, 1])).toBe(0);
    });
});
