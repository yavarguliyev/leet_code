/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
let getSkyline = function(buildings) {
  const events = [];
  for (const [left, right, height] of buildings) {
      // Start of building event
      events.push([left, -height]);  // Use negative height to differentiate start from end
      // End of building event
      events.push([right, height]);
  }

  // Sort events: 
  // 1. By x-coordinate
  // 2. If x is the same, process starts (-height) before ends (height)
  events.sort((a, b) => {
      if (a[0] !== b[0]) {
          return a[0] - b[0];
      }
      return a[1] - b[1];
  });

  const result = [];
  const maxHeap = [0];  // Max-heap to store building heights
  let prevMaxHeight = 0;

  for (const [x, h] of events) {
      if (h < 0) {
          // Building start: Add the height to the heap
          maxHeap.push(-h);
          maxHeap.sort((a, b) => b - a);  // Ensure it's a max-heap
      } else {
          // Building end: Remove the height from the heap
          const index = maxHeap.indexOf(h);
          if (index !== -1) {
              maxHeap.splice(index, 1);
          }
      }

      const currentMaxHeight = maxHeap[0];
      if (currentMaxHeight !== prevMaxHeight) {
          // Height has changed, add a new key point
          result.push([x, currentMaxHeight]);
          prevMaxHeight = currentMaxHeight;
      }
  }

  return result;
};

module.exports = { getSkyline };