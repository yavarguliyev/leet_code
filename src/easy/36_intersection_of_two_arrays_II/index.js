/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
let intersect = function(nums1, nums2) {
    const countMap = {};
    const result = [];

    // Count occurrences of each number in nums1
    for (const num of nums1) {
        countMap[num] = (countMap[num] || 0) + 1;
    }

    // Check nums2 for intersections
    for (const num of nums2) {
        if (countMap[num] > 0) {
            result.push(num);
            countMap[num]--; // Decrease the count to reflect that this number is used
        }
    }

    return result;
};

module.exports = intersect;
