const minGroups = require('./index');

describe('minGroups', () => {
    test('should return the correct minimum number of groups for non-overlapping intervals', () => {
        const intervals = [[1, 3], [5, 6], [8, 10], [11, 13]];
        const result = minGroups(intervals);
        expect(result).toBe(1); // No overlap, so all intervals can be in one group
    });

    test('should return the correct minimum number of groups for overlapping intervals', () => {
        const intervals = [[5, 10], [6, 8], [1, 5], [2, 3], [1, 10]];
        const result = minGroups(intervals);
        expect(result).toBe(3); // Some intervals overlap, requiring 3 groups
    });

    test('should handle single interval', () => {
        const intervals = [[1, 2]];
        const result = minGroups(intervals);
        expect(result).toBe(1); // Only one interval, so one group is sufficient
    });

    test('should handle intervals with the same start and end point', () => {
        const intervals = [[1, 1], [1, 1], [1, 1]];
        const result = minGroups(intervals);
        expect(result).toBe(3); // Each interval is distinct but overlaps at the same point
    });

    test('should handle intervals that overlap at the boundary', () => {
        const intervals = [[1, 5], [5, 8]];
        const result = minGroups(intervals);
        expect(result).toBe(2); // Intervals overlap at point 5, requiring 2 groups
    });

    test('should handle large number of intervals', () => {
        const intervals = [];
        for (let i = 1; i <= 10000; i++) {
            intervals.push([i, i + 1]); // Consecutive intervals, each overlaps with the next
        }
        const result = minGroups(intervals);
        expect(result).toBe(2); // Each interval only overlaps with the next one, so 2 groups are sufficient
    });

    test('should handle complex intervals', () => {
        const intervals = [[1, 4], [2, 6], [8, 10], [3, 5], [7, 9]];
        const result = minGroups(intervals);
        expect(result).toBe(3); // Multiple overlaps that require 3 groups
    });

    test('should handle intervals that completely overlap', () => {
        const intervals = [[1, 10], [2, 9], [3, 8], [4, 7], [5, 6]];
        const result = minGroups(intervals);
        expect(result).toBe(5); // Each interval overlaps fully, requiring 5 separate groups
    });
});
