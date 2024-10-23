const { MedianFinder } = require('./index');

describe('MedianFinder', () => {
    let medianFinder;

    beforeEach(() => {
        medianFinder = new MedianFinder();
    });

    test('should return correct median after adding one element', () => {
        medianFinder.addNum(1);
        expect(medianFinder.findMedian()).toBe(1);
    });

    test('should return correct median after adding two elements', () => {
        medianFinder.addNum(1);
        medianFinder.addNum(2);
        expect(medianFinder.findMedian()).toBe(1.5); // (1 + 2) / 2 = 1.5
    });

    test('should return correct median after adding three elements', () => {
        medianFinder.addNum(1);
        medianFinder.addNum(2);
        medianFinder.addNum(3);
        expect(medianFinder.findMedian()).toBe(2); // Middle element in [1, 2, 3]
    });

    test('should return correct median after adding multiple elements (odd count)', () => {
        medianFinder.addNum(5);
        medianFinder.addNum(2);
        medianFinder.addNum(8);
        medianFinder.addNum(10);
        medianFinder.addNum(1);
        expect(medianFinder.findMedian()).toBe(5); // Sorted: [1, 2, 5, 8, 10], middle is 5
    });

    test('should return correct median after adding multiple elements (even count)', () => {
        medianFinder.addNum(5);
        medianFinder.addNum(2);
        medianFinder.addNum(8);
        medianFinder.addNum(10);
        medianFinder.addNum(1);
        medianFinder.addNum(3);
        expect(medianFinder.findMedian()).toBe(4); // Sorted: [1, 2, 3, 5, 8, 10], (3 + 5) / 2 = 4
    });

    test('should handle large numbers', () => {
        medianFinder.addNum(100000);
        medianFinder.addNum(100001);
        expect(medianFinder.findMedian()).toBe(100000.5); // (100000 + 100001) / 2 = 100000.5
    });

    test('should handle negative numbers', () => {
        medianFinder.addNum(-5);
        medianFinder.addNum(-10);
        medianFinder.addNum(0);
        expect(medianFinder.findMedian()).toBe(-5); // Sorted: [-10, -5, 0], median is -5
    });
});
