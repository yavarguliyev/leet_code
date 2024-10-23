/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
let merge = function(nums1, m, nums2, n) {
  // Pointers for nums1, nums2, and the last position to place the merged elements
  let i = m - 1;  // Last valid element of nums1
  let j = n - 1;  // Last element of nums2
  let k = m + n - 1;  // Last position in nums1

  // Iterate backwards, comparing elements from the back of both arrays
  while (i >= 0 && j >= 0) {
      if (nums1[i] > nums2[j]) {
          nums1[k] = nums1[i];  // Place the larger element at the end of nums1
          i--;  // Move to the next element in nums1
      } else {
          nums1[k] = nums2[j];  // Place the larger element from nums2 at the end
          j--;  // Move to the next element in nums2
      }
      k--;  // Move the pointer for the next position to place
  }

  // If any elements are left in nums2, copy them to nums1
  while (j >= 0) {
      nums1[k] = nums2[j];
      j--;
      k--;
  }
  // No need to handle remaining elements in nums1 because they are already in place
};

module.exports = merge;
