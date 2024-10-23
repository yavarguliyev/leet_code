const maxProfit = require('./index');

describe('maxProfit', () => {
    test('should return 5 for prices [7, 1, 5, 3, 6, 4]', () => {
        expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
    });

    test('should return 0 for prices [7, 6, 4, 3, 1]', () => {
        expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
    });

    test('should return 4 for prices [2, 4, 1, 5]', () => {
        expect(maxProfit([2, 4, 1, 5])).toBe(4); // Buy at 1, sell at 5
    });

    test('should return 0 for prices [1, 2, 3, 4, 5]', () => {
        expect(maxProfit([1, 2, 3, 4, 5])).toBe(4); // Buy at 1, sell at 5
    });

    test('should return 0 for a single price [5]', () => {
        expect(maxProfit([5])).toBe(0); // Not enough prices to make a profit
    });

    test('should return 0 for empty prices array', () => {
        expect(maxProfit([])).toBe(0); // Not enough prices to make a profit
    });
});
