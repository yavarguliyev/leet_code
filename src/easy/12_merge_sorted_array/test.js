const merge = require('./index');

test('merges two sorted arrays correctly - Case 1', () => {
    let nums1 = [1, 2, 3, 0, 0, 0];
    let nums2 = [2, 5, 6];
    merge(nums1, 3, nums2, 3);
    expect(nums1).toEqual([1, 2, 2, 3, 5, 6]);
});

test('merges when nums2 is empty - Case 2', () => {
    let nums1 = [1];
    let nums2 = [];
    merge(nums1, 1, nums2, 0);
    expect(nums1).toEqual([1]);
});

test('merges when nums1 is empty - Case 3', () => {
    let nums1 = [0];
    let nums2 = [1];
    merge(nums1, 0, nums2, 1);
    expect(nums1).toEqual([1]);
});

test('merges two sorted arrays correctly - Case 4 with duplicates', () => {
    let nums1 = [4, 5, 6, 0, 0, 0];
    let nums2 = [1, 2, 3];
    merge(nums1, 3, nums2, 3);
    expect(nums1).toEqual([1, 2, 3, 4, 5, 6]);
});

test('merges with all elements in nums2 smaller than nums1', () => {
    let nums1 = [4, 5, 6, 0, 0, 0];
    let nums2 = [1, 2, 3];
    merge(nums1, 3, nums2, 3);
    expect(nums1).toEqual([1, 2, 3, 4, 5, 6]);
});

test('merges with all elements in nums1 smaller than nums2', () => {
    let nums1 = [1, 2, 3, 0, 0, 0];
    let nums2 = [4, 5, 6];
    merge(nums1, 3, nums2, 3);
    expect(nums1).toEqual([1, 2, 3, 4, 5, 6]);
});
