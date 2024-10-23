const maxPoints = require('./index');

describe('maxPoints', () => {
    it('should return 3 for points [[1,1],[2,2],[3,3]]', () => {
        const points = [[1, 1], [2, 2], [3, 3]];
        expect(maxPoints(points)).toBe(3);
    });

    it('should return 4 for points [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]', () => {
        const points = [[1, 1], [3, 2], [5, 3], [4, 1], [2, 3], [1, 4]];
        expect(maxPoints(points)).toBe(4);
    });

    it('should return 2 for points [[1,1],[1,1],[2,2]]', () => {
        const points = [[1, 1], [1, 1], [2, 2]];
        expect(maxPoints(points)).toBe(3); // All points are the same, count as duplicates
    });

    it('should return 1 for points [[1,1]]', () => {
        const points = [[1, 1]];
        expect(maxPoints(points)).toBe(1); // Only one point
    });

    it('should return 5 for points [[1,1],[2,1],[3,1],[4,1],[5,1]]', () => {
        const points = [[1, 1], [2, 1], [3, 1], [4, 1], [5, 1]];
        expect(maxPoints(points)).toBe(5); // All points on the same horizontal line
    });

    it('should return 5 for points [[1,1],[1,2],[1,3],[1,4],[1,5]]', () => {
        const points = [[1, 1], [1, 2], [1, 3], [1, 4], [1, 5]];
        expect(maxPoints(points)).toBe(5); // All points on the same vertical line
    });

    it('should return 0 for no points', () => {
        const points = [];
        expect(maxPoints(points)).toBe(0); // No points
    });

    it('should return 2 for points [[1,1],[2,2],[3,4],[4,3],[5,2]]', () => {
        const points = [[1, 1], [2, 2], [3, 4], [4, 3], [5, 2]];
        expect(maxPoints(points)).toBe(3);
    });

    it('should return 4 for points [[1,1],[2,2],[3,3],[1,0],[2,1],[3,2]]', () => {
        const points = [[1, 1], [2, 2], [3, 3], [1, 0], [2, 1], [3, 2]];
        expect(maxPoints(points)).toBe(3);
    });
});
