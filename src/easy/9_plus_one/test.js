const plusOne = require('./index');

describe('plusOne', () => {
    test('should increment the last digit', () => {
        expect(plusOne([1, 2, 3])).toEqual([1, 2, 4]);
    });

    test('should increment the last digit without carry', () => {
        expect(plusOne([4, 3, 2, 1])).toEqual([4, 3, 2, 2]);
    });

    test('should handle single digit 9', () => {
        expect(plusOne([9])).toEqual([1, 0]);
    });

    test('should handle multiple 9s', () => {
        expect(plusOne([9, 9])).toEqual([1, 0, 0]);
    });

    test('should increment the last zero', () => {
        expect(plusOne([1, 0, 0])).toEqual([1, 0, 1]);
    });

    test('should increment 0', () => {
        expect(plusOne([0])).toEqual([1]);
    });

    test('should carry over from last digit', () => {
        expect(plusOne([1, 2, 9])).toEqual([1, 3, 0]);
    });

    test('should carry over multiple digits', () => {
        expect(plusOne([1, 9, 9])).toEqual([2, 0, 0]);
    });
});
