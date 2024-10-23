/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
let maxSlidingWindow = function(nums, k) {
  const deque = [];
  const result = [];

  for (let i = 0; i < nums.length; i++) {
      // Remove elements from deque that are out of the current window
      if (deque.length && deque[0] < i - k + 1) {
          deque.shift();
      }

      // Remove elements from deque that are smaller than the current element
      while (deque.length && nums[deque[deque.length - 1]] <= nums[i]) {
          deque.pop();
      }

      // Add the current element's index to the deque
      deque.push(i);

      // Once we have a full window, record the maximum element
      if (i >= k - 1) {
          result.push(nums[deque[0]]);
      }
  }

  return result;
};

module.exports = { maxSlidingWindow };