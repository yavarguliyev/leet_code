const { addTwoNumbers, arrayToList, listToArray } = require('./index');

test('should return [7,0,8] for inputs [2,4,3] and [5,6,4]', () => {
    const l1 = arrayToList([2, 4, 3]);
    const l2 = arrayToList([5, 6, 4]);
    const result = addTwoNumbers(l1, l2);
    expect(listToArray(result)).toEqual([7, 0, 8]);
});

test('should return [0] for inputs [0] and [0]', () => {
    const l1 = arrayToList([0]);
    const l2 = arrayToList([0]);
    const result = addTwoNumbers(l1, l2);
    expect(listToArray(result)).toEqual([0]);
});

test('should return [8,9,9,9,0,0,0,1] for inputs [9,9,9,9,9,9,9] and [9,9,9,9]', () => {
    const l1 = arrayToList([9, 9, 9, 9, 9, 9, 9]);
    const l2 = arrayToList([9, 9, 9, 9]);
    const result = addTwoNumbers(l1, l2);
    expect(listToArray(result)).toEqual([8, 9, 9, 9, 0, 0, 0, 1]);
});

test('should return [1,8] for inputs [1,8] and [0]', () => {
    const l1 = arrayToList([1, 8]);
    const l2 = arrayToList([0]);
    const result = addTwoNumbers(l1, l2);
    expect(listToArray(result)).toEqual([1, 8]);
});

test('should return [0,0,2] for inputs [9,9,1] and [1]', () => {
    const l1 = arrayToList([9, 9, 1]);
    const l2 = arrayToList([1]);
    const result = addTwoNumbers(l1, l2);
    expect(listToArray(result)).toEqual([0, 0, 2]);
});
