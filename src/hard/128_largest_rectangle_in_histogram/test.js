const largestRectangleArea = require('./index');

describe('Largest Rectangle in Histogram', () => {
    test('Basic example 1', () => {
        expect(largestRectangleArea([2, 1, 5, 6, 2, 3])).toBe(10);
    });

    test('Basic example 2', () => {
        expect(largestRectangleArea([2, 4])).toBe(4);
    });

    test('All heights are the same', () => {
        expect(largestRectangleArea([5, 5, 5, 5])).toBe(20);
    });

    test('Strictly increasing heights', () => {
        expect(largestRectangleArea([1, 2, 3, 4, 5])).toBe(9); // 3, 4, 5
    });

    test('Strictly decreasing heights', () => {
        expect(largestRectangleArea([5, 4, 3, 2, 1])).toBe(9); // 3, 4, 5
    });

    test('Single bar', () => {
        expect(largestRectangleArea([4])).toBe(4);
    });

    test('Two bars, different heights', () => {
        expect(largestRectangleArea([1, 2])).toBe(2);
        expect(largestRectangleArea([2, 1])).toBe(2);
    });

    test('Empty input', () => {
        expect(largestRectangleArea([])).toBe(0);
    });
});
