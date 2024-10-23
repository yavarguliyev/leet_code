class MinPriorityQueue {
  constructor() {
      this.heap = [];
  }

  enqueue(value) {
      this.heap.push(value);
      this.bubbleUp(this.heap.length - 1);
  }

  dequeue() {
      if (this.size() === 1) return { element: this.heap.pop() };

      const min = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.bubbleDown(0);
      return { element: min };
  }

  front() {
      return { element: this.heap[0] };
  }

  size() {
      return this.heap.length;
  }

  bubbleUp(index) {
      while (index > 0) {
          const parentIdx = Math.floor((index - 1) / 2);
          if (this.heap[parentIdx] <= this.heap[index]) break;
          [this.heap[parentIdx], this.heap[index]] = [this.heap[index], this.heap[parentIdx]];
          index = parentIdx;
      }
  }

  bubbleDown(index) {
      const length = this.heap.length;
      while (index < length) {
          let smallest = index;
          const left = 2 * index + 1;
          const right = 2 * index + 2;

          if (left < length && this.heap[left] < this.heap[smallest]) {
              smallest = left;
          }
          if (right < length && this.heap[right] < this.heap[smallest]) {
              smallest = right;
          }
          if (smallest === index) break;

          [this.heap[smallest], this.heap[index]] = [this.heap[index], this.heap[smallest]];
          index = smallest;
      }
  }
}

class MaxPriorityQueue {
  constructor() {
      this.heap = [];
  }

  enqueue(value) {
      this.heap.push(value);
      this.bubbleUp(this.heap.length - 1);
  }

  dequeue() {
      if (this.size() === 1) return { element: this.heap.pop() };

      const max = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.bubbleDown(0);
      return { element: max };
  }

  front() {
      return { element: this.heap[0] };
  }

  size() {
      return this.heap.length;
  }

  bubbleUp(index) {
      while (index > 0) {
          const parentIdx = Math.floor((index - 1) / 2);
          if (this.heap[parentIdx] >= this.heap[index]) break;
          [this.heap[parentIdx], this.heap[index]] = [this.heap[index], this.heap[parentIdx]];
          index = parentIdx;
      }
  }

  bubbleDown(index) {
      const length = this.heap.length;
      while (index < length) {
          let largest = index;
          const left = 2 * index + 1;
          const right = 2 * index + 2;

          if (left < length && this.heap[left] > this.heap[largest]) {
              largest = left;
          }
          if (right < length && this.heap[right] > this.heap[largest]) {
              largest = right;
          }
          if (largest === index) break;

          [this.heap[largest], this.heap[index]] = [this.heap[index], this.heap[largest]];
          index = largest;
      }
  }
}

let MedianFinder = function () {
  this.minQ = new MinPriorityQueue();
  this.maxQ = new MaxPriorityQueue();
};

/**
* @param {number} num
* @return {void}
*/
MedianFinder.prototype.addNum = function (num) {
  this.maxQ.enqueue(num);
  this.minQ.enqueue(this.maxQ.dequeue().element);
  if (this.minQ.size() - this.maxQ.size() > 1) {
      this.maxQ.enqueue(this.minQ.dequeue().element);
  }
};

/**
* @return {number}
*/
MedianFinder.prototype.findMedian = function () {
  if (this.minQ.size() === this.maxQ.size()) {
      return (this.minQ.front().element + this.maxQ.front().element) / 2;
  }
  return this.minQ.front().element;
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

module.exports = { MedianFinder };