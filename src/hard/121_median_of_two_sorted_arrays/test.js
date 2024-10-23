const findMedianSortedArrays = require('./index');  // Adjust the path to the location of your function

describe('findMedianSortedArrays', () => {
    test('should return the correct median for two sorted arrays of equal length', () => {
        const nums1 = [1, 3];
        const nums2 = [2, 4];
        const expectedOutput = 2.5;
        expect(findMedianSortedArrays(nums1, nums2)).toBe(expectedOutput);
    });

    test('should return the correct median for two sorted arrays with odd total length', () => {
        const nums1 = [1, 3];
        const nums2 = [2];
        const expectedOutput = 2;
        expect(findMedianSortedArrays(nums1, nums2)).toBe(expectedOutput);
    });

    test('should return the correct median when one array is empty', () => {
        const nums1 = [];
        const nums2 = [1, 2, 3, 4];
        const expectedOutput = 2.5;
        expect(findMedianSortedArrays(nums1, nums2)).toBe(expectedOutput);
    });

    test('should return the correct median for arrays of different lengths', () => {
        const nums1 = [1, 3, 8];
        const nums2 = [7, 9];
        const expectedOutput = 7;
        expect(findMedianSortedArrays(nums1, nums2)).toBe(expectedOutput);
    });

    test('should return the correct median for arrays with overlapping elements', () => {
        const nums1 = [1, 3, 5];
        const nums2 = [2, 4, 6];
        const expectedOutput = 3.5;
        expect(findMedianSortedArrays(nums1, nums2)).toBe(expectedOutput);
    });

    test('should return the correct median for arrays where all elements in one are smaller than the other', () => {
        const nums1 = [1, 2, 3];
        const nums2 = [4, 5, 6];
        const expectedOutput = 3.5;
        expect(findMedianSortedArrays(nums1, nums2)).toBe(expectedOutput);
    });

    test('should return the correct median when both arrays have only one element', () => {
        const nums1 = [1];
        const nums2 = [2];
        const expectedOutput = 1.5;
        expect(findMedianSortedArrays(nums1, nums2)).toBe(expectedOutput);
    });

    test('should return the correct median when one array has negative numbers', () => {
        const nums1 = [-3, -1, 4];
        const nums2 = [-2, 2, 3];
        const expectedOutput = 0.5;
        expect(findMedianSortedArrays(nums1, nums2)).toBe(expectedOutput);
    });

    test('should throw an error if the arrays are not sorted', () => {
        const nums1 = [3, 1];
        const nums2 = [2, 4];
        expect(() => findMedianSortedArrays(nums1, nums2)).toThrow("Input arrays are not sorted.");
    });
});