const romanToInt = require('./index');

test('Example 1: III = 3', () => {
    expect(romanToInt('III')).toBe(3);
});

test('Example 2: LVIII = 58', () => {
    expect(romanToInt('LVIII')).toBe(58);
});

test('Example 3: MCMXCIV = 1994', () => {
    expect(romanToInt('MCMXCIV')).toBe(1994);
});

test('Edge case: IV = 4', () => {
    expect(romanToInt('IV')).toBe(4);
});

test('Edge case: IX = 9', () => {
    expect(romanToInt('IX')).toBe(9);
});

test('Edge case: XL = 40', () => {
    expect(romanToInt('XL')).toBe(40);
});

test('Edge case: CM = 900', () => {
    expect(romanToInt('CM')).toBe(900);
});
