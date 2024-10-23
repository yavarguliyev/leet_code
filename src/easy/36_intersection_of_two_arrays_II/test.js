const intersect = require('./index');

describe('intersect', () => {
    test('returns the intersection of two arrays with duplicates', () => {
        const nums1 = [1, 2, 2, 1];
        const nums2 = [2, 2];
        expect(intersect(nums1, nums2)).toEqual([2, 2]);
    });

    test('returns the intersection of two arrays with unique elements', () => {
        const nums1 = [4, 9, 5];
        const nums2 = [9, 4, 9, 8, 4];
        const result = intersect(nums1, nums2);
        expect(result).toContain(4);
        expect(result).toContain(9);
        expect(result.length).toBe(2); // Ensures that both elements are included
    });

    test('returns an empty array when there is no intersection', () => {
        const nums1 = [1, 2, 3];
        const nums2 = [4, 5, 6];
        expect(intersect(nums1, nums2)).toEqual([]);
    });

    test('handles arrays with one empty array', () => {
        const nums1 = [];
        const nums2 = [1, 2, 3];
        expect(intersect(nums1, nums2)).toEqual([]);
    });

    test('handles arrays with one element each', () => {
        const nums1 = [1];
        const nums2 = [1];
        expect(intersect(nums1, nums2)).toEqual([1]);
    });

    test('returns multiple intersections with duplicates', () => {
        const nums1 = [1, 2, 2, 3];
        const nums2 = [2, 2, 3, 3];
        const result = intersect(nums1, nums2);
        expect(result).toEqual(expect.arrayContaining([2, 2, 3]));
        expect(result.length).toBe(3); // Ensures the correct count
    });
});
