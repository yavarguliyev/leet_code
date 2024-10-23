const { getSkyline } = require('./index');

describe('getSkyline', () => {
    it('should return the correct skyline for example 1', () => {
        const buildings = [[2,9,10],[3,7,15],[5,12,12],[15,20,10],[19,24,8]];
        const expected = [[2,10],[3,15],[7,12],[12,0],[15,10],[20,8],[24,0]];
        expect(getSkyline(buildings)).toEqual(expected);
    });

    it('should return the correct skyline for example 2', () => {
        const buildings = [[0,2,3],[2,5,3]];
        const expected = [[0,3],[5,0]];
        expect(getSkyline(buildings)).toEqual(expected);
    });

    it('should handle overlapping buildings correctly', () => {
        const buildings = [[1,5,11],[2,6,6],[3,13,13]];
        const expected = [[1,11],[3,13],[13,0]];
        expect(getSkyline(buildings)).toEqual(expected);
    });

    it('should handle non-overlapping buildings', () => {
        const buildings = [[1,2,1],[3,4,1],[5,6,1]];
        const expected = [[1,1],[2,0],[3,1],[4,0],[5,1],[6,0]];
        expect(getSkyline(buildings)).toEqual(expected);
    });
});
