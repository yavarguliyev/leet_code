const sortColors = require('./index');

// Unit tests
describe('sortColors', () => {
    test('Example 1', () => {
        const nums = [2,0,2,1,1,0];
        sortColors(nums);
        expect(nums).toEqual([0,0,1,1,2,2]);
    });

    test('Example 2', () => {
        const nums = [2,0,1];
        sortColors(nums);
        expect(nums).toEqual([0,1,2]);
    });

    test('All colors in random order', () => {
        const nums = [1,2,0,1,0,2];
        sortColors(nums);
        expect(nums).toEqual([0,0,1,1,2,2]);
    });

    test('Single color array', () => {
        const nums = [0,0,0];
        sortColors(nums);
        expect(nums).toEqual([0,0,0]);
    });

    test('Two color array', () => {
        const nums = [1,0,1,1,0,0];
        sortColors(nums);
        expect(nums).toEqual([0,0,0,1,1,1]);
    });

    test('Already sorted array', () => {
        const nums = [0,0,1,1,2,2];
        sortColors(nums);
        expect(nums).toEqual([0,0,1,1,2,2]);
    });
});
