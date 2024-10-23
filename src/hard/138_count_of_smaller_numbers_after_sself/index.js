/**
 * @param {number[]} nums
 * @return {number[]}
 */
let countSmaller = function(nums) {
    const counts = new Array(nums.length).fill(0);
    const indexedNums = nums.map((num, index) => [num, index]);

    const mergeSort = (arr) => {
        if (arr.length <= 1) return arr;

        const mid = Math.floor(arr.length / 2);
        const left = mergeSort(arr.slice(0, mid));
        const right = mergeSort(arr.slice(mid));

        let j = 0;
        let rightCount = 0;

        for (let i = 0; i < left.length; i++) {
            while (j < right.length && right[j][0] < left[i][0]) {
                rightCount++;
                j++;
            }
            counts[left[i][1]] += rightCount;
        }

        return merge(left, right);
    };

    const merge = (left, right) => {
        let sorted = [];
        let i = 0, j = 0;

        while (i < left.length && j < right.length) {
            if (left[i][0] <= right[j][0]) {
                sorted.push(left[i++]);
            } else {
                sorted.push(right[j++]);
            }
        }

        return sorted.concat(left.slice(i)).concat(right.slice(j));
    };

    mergeSort(indexedNums);
    return counts;
};

module.exports = { countSmaller };