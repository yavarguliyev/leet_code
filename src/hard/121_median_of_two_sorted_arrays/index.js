/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
let findMedianSortedArrays = function(nums1, nums2) {
    let A = nums1;
    let B = nums2;
    
    // Check if both arrays are sorted
    for (let i = 1; i < A.length; i++) {
        if (A[i] < A[i - 1]) throw new Error("Input arrays are not sorted.");
    }
    for (let i = 1; i < B.length; i++) {
        if (B[i] < B[i - 1]) throw new Error("Input arrays are not sorted.");
    }

    if (A.length > B.length) {
        [A, B] = [B, A]; // Ensure A is the smaller array
    }
    
    const m = A.length;
    const n = B.length;
    let imin = 0, imax = m, halfLen = Math.floor((m + n + 1) / 2);
    
    while (imin <= imax) {
        let i = Math.floor((imin + imax) / 2);
        let j = halfLen - i;
        
        if (i < m && B[j-1] > A[i]) {
            imin = i + 1;  // i is too small, increase it
        } else if (i > 0 && A[i-1] > B[j]) {
            imax = i - 1;  // i is too big, decrease it
        } else {
            let maxLeftA = (i === 0) ? -Infinity : A[i - 1];
            let minRightA = (i === m) ? Infinity : A[i];
            let maxLeftB = (j === 0) ? -Infinity : B[j - 1];
            let minRightB = (j === n) ? Infinity : B[j];

            if ((m + n) % 2 === 1) {
                return Math.max(maxLeftA, maxLeftB);  // Odd length
            } else {
                return (Math.max(maxLeftA, maxLeftB) + Math.min(minRightA, minRightB)) / 2;  // Even length
            }
        }
    }
    
    throw new Error("Input arrays are not sorted.");
};

module.exports = findMedianSortedArrays;