const climbStairs = require('./index');

describe('climbStairs', () => {
    test('should return 1 for n = 1', () => {
        expect(climbStairs(1)).toBe(1);
    });

    test('should return 2 for n = 2', () => {
        expect(climbStairs(2)).toBe(2);
    });

    test('should return 3 for n = 3', () => {
        expect(climbStairs(3)).toBe(3);
    });

    test('should return 5 for n = 4', () => {
        expect(climbStairs(4)).toBe(5);
    });

    test('should return 8 for n = 5', () => {
        expect(climbStairs(5)).toBe(8);
    });

    test('should return 13 for n = 6', () => {
        expect(climbStairs(6)).toBe(13);
    });

    test('should return 21 for n = 7', () => {
        expect(climbStairs(7)).toBe(21);
    });

    test('should return 34 for n = 8', () => {
        expect(climbStairs(8)).toBe(34);
    });

    test('should return 55 for n = 9', () => {
        expect(climbStairs(9)).toBe(55);
    });

    test('should return 89 for n = 10', () => {
        expect(climbStairs(10)).toBe(89);
    });

    test('should return 144 for n = 11', () => {
        expect(climbStairs(11)).toBe(144);
    });

    test('should return 233 for n = 12', () => {
        expect(climbStairs(12)).toBe(233);
    });

    test('should return 377 for n = 13', () => {
        expect(climbStairs(13)).toBe(377);
    });
    
    test('should return 610 for n = 14', () => {
        expect(climbStairs(14)).toBe(610);
    });

    test('should return 987 for n = 15', () => {
        expect(climbStairs(15)).toBe(987);
    });
});
