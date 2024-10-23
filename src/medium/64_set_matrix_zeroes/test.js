const setZeroes = require('./index');

// Unit tests
describe('setZeroes', () => {
    test('Example 1', () => {
        const matrix = [[1,1,1],[1,0,1],[1,1,1]];
        setZeroes(matrix);
        expect(matrix).toEqual([[1,0,1],[0,0,0],[1,0,1]]);
    });

    test('Example 2', () => {
        const matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]];
        setZeroes(matrix);
        expect(matrix).toEqual([[0,0,0,0],[0,4,5,0],[0,3,1,0]]);
    });

    test('Single zero in a 3x3 matrix', () => {
        const matrix = [[1,2,3],[4,0,6],[7,8,9]];
        setZeroes(matrix);
        expect(matrix).toEqual([[1,0,3],[0,0,0],[7,0,9]]);
    });

    test('Matrix with no zeros', () => {
        const matrix = [[1,2,3],[4,5,6],[7,8,9]];
        setZeroes(matrix);
        expect(matrix).toEqual([[1,2,3],[4,5,6],[7,8,9]]);
    });

    test('Single row matrix with zero', () => {
        const matrix = [[1,0,3]];
        setZeroes(matrix);
        expect(matrix).toEqual([[0,0,0]]);
    });

    test('Single column matrix with zero', () => {
        const matrix = [[0],[1],[2]];
        setZeroes(matrix);
        expect(matrix).toEqual([[0],[0],[0]]);
    });
});
