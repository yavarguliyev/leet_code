const mySqrt = require('./index');

test('returns square root of 4', () => {
    expect(mySqrt(4)).toBe(2);
});

test('returns square root of 8 rounded down', () => {
    expect(mySqrt(8)).toBe(2);
});

test('returns square root of 0', () => {
    expect(mySqrt(0)).toBe(0);
});

test('returns square root of 1', () => {
    expect(mySqrt(1)).toBe(1);
});

test('returns square root of 16', () => {
    expect(mySqrt(16)).toBe(4);
});

test('returns square root of 99 rounded down', () => {
    expect(mySqrt(99)).toBe(9); // sqrt(99) ≈ 9.949, rounded down to 9
});

test('returns square root of a large number', () => {
    expect(mySqrt(2147395599)).toBe(46339);  // sqrt(2147395599) ≈ 46339
});

test('returns square root of the largest number within the constraint', () => {
    expect(mySqrt(2147483647)).toBe(46340);  // sqrt(2147483647) ≈ 46340.95, rounded down to 46340
});
