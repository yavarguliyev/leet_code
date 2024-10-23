const myAtoi = require('./index');

test('should convert "42" to 42', () => {
    expect(myAtoi("42")).toBe(42);
});

test('should convert " -042" to -42', () => {
    expect(myAtoi(" -042")).toBe(-42);
});

test('should convert "1337c0d3" to 1337', () => {
    expect(myAtoi("1337c0d3")).toBe(1337);
});

test('should convert "0-1" to 0', () => {
    expect(myAtoi("0-1")).toBe(0);
});

test('should convert "words and 987" to 0', () => {
    expect(myAtoi("words and 987")).toBe(0);
});

test('should return 2147483647 for overflow case "2147483648"', () => {
    expect(myAtoi("2147483648")).toBe(2147483647);
});

test('should return -2147483648 for underflow case "-2147483649"', () => {
    expect(myAtoi("-2147483649")).toBe(-2147483648);
});
