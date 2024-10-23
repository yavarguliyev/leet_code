/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
let merge = function(intervals) {
    // Step 1: Sort intervals by their start times
    intervals.sort((a, b) => a[0] - b[0]);
    
    const merged = [];
    
    for (let i = 0; i < intervals.length; i++) {
        const currentInterval = intervals[i];

        // Step 2: If merged is empty or no overlap, add the interval
        if (merged.length === 0 || merged[merged.length - 1][1] < currentInterval[0]) {
            merged.push(currentInterval);
        } else {
            // There is an overlap, so merge the intervals
            merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], currentInterval[1]);
        }
    }

    return merged; // Step 3: Return the merged intervals
};

module.exports = merge;
