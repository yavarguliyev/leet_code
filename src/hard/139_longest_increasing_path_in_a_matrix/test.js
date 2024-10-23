const { longestIncreasingPath } = require('./index');

describe('longestIncreasingPath', () => {
    test('should return the length of the longest increasing path', () => {
        expect(longestIncreasingPath([[9,9,4],[6,6,8],[2,1,1]])).toBe(4);
        expect(longestIncreasingPath([[3,4,5],[3,2,6],[2,2,1]])).toBe(4);
        expect(longestIncreasingPath([[1]])).toBe(1);
        expect(longestIncreasingPath([[1, 2, 3, 4], [3, 2, 1, 0], [4, 5, 6, 7]])).toBe(8);
        expect(longestIncreasingPath([])).toBe(0);
    });
});
