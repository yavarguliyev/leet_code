const reverseInteger = require('./index');

test('should reverse positive number 123', () => {
    const result = reverseInteger(123);
    expect(result).toBe(321);
});

test('should reverse negative number -123', () => {
    const result = reverseInteger(-123);
    expect(result).toBe(-321);
});

test('should reverse number with trailing zero 120', () => {
    const result = reverseInteger(120);
    expect(result).toBe(21);
});

test('should return 0 for overflow case', () => {
    const result = reverseInteger(1534236469);
    expect(result).toBe(0);
});

test('should handle edge case of 0', () => {
    const result = reverseInteger(0);
    expect(result).toBe(0);
});

test('should handle edge case of INT_MIN', () => {
    const result = reverseInteger(-2147483648);
    expect(result).toBe(0);
});
