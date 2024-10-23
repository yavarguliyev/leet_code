const { maxSlidingWindow } = require('./index');

describe('maxSlidingWindow', () => {
    it('should return the correct max sliding window for example 1', () => {
        const nums = [1,3,-1,-3,5,3,6,7];
        const k = 3;
        const expected = [3, 3, 5, 5, 6, 7];
        expect(maxSlidingWindow(nums, k)).toEqual(expected);
    });

    it('should return the correct result for a single element array', () => {
        const nums = [1];
        const k = 1;
        const expected = [1];
        expect(maxSlidingWindow(nums, k)).toEqual(expected);
    });

    it('should return the correct result when k equals the array length', () => {
        const nums = [1,2,3,4,5];
        const k = 5;
        const expected = [5];
        expect(maxSlidingWindow(nums, k)).toEqual(expected);
    });

    it('should handle arrays with decreasing elements', () => {
        const nums = [5,4,3,2,1];
        const k = 3;
        const expected = [5, 4, 3];
        expect(maxSlidingWindow(nums, k)).toEqual(expected);
    });

    it('should handle arrays with increasing elements', () => {
        const nums = [1,2,3,4,5];
        const k = 3;
        const expected = [3, 4, 5];
        expect(maxSlidingWindow(nums, k)).toEqual(expected);
    });
});
