const spiralOrder = require('./index');

describe('spiralOrder', () => {
    test('returns elements of the matrix in spiral order', () => {
        expect(spiralOrder([[1,2,3],[4,5,6],[7,8,9]])).toEqual([1,2,3,6,9,8,7,4,5]);
        expect(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]])).toEqual([1,2,3,4,8,12,11,10,9,5,6,7]);
        expect(spiralOrder([[1]])).toEqual([1]);
        expect(spiralOrder([[1,2],[3,4]])).toEqual([1,2,4,3]);
        expect(spiralOrder([[1,2,3],[4,5,6]])).toEqual([1,2,3,6,5,4]);
    });
});
