const fizzBuzz = require('./index');

describe('fizzBuzz', () => {
    test('returns correct output for n = 3', () => {
        expect(fizzBuzz(3)).toEqual(["1", "2", "Fizz"]);
    });

    test('returns correct output for n = 5', () => {
        expect(fizzBuzz(5)).toEqual(["1", "2", "Fizz", "4", "Buzz"]);
    });

    test('returns correct output for n = 15', () => {
        expect(fizzBuzz(15)).toEqual([
            "1", "2", "Fizz", "4", "Buzz", "Fizz",
            "7", "8", "Fizz", "Buzz", "11", "Fizz",
            "13", "14", "FizzBuzz"
        ]);
    });

    test('returns correct output for n = 1', () => {
        expect(fizzBuzz(1)).toEqual(["1"]);
    });

    test('returns correct output for n = 30', () => {
        expect(fizzBuzz(30)).toEqual([
            "1", "2", "Fizz", "4", "Buzz", "Fizz",
            "7", "8", "Fizz", "Buzz", "11", "Fizz",
            "13", "14", "FizzBuzz", "16", "17",
            "Fizz", "19", "Buzz", "Fizz", "22",
            "23", "Fizz", "Buzz", "26", "Fizz",
            "28", "29", "FizzBuzz"
        ]);
    });
});
