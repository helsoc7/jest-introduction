const multiply = require('./multiply');
const palindrome = require('./palindrome');
const reverseString = require('./reverseString');
const shallowObject = require('./shallowObject');

// Tests für die multiply-Funktion
describe('multiply function', () => {
    test('multiply 1 * 2 to equal 2', () => {
        expect(multiply(1, 2)).toBe(2);
    });
});

// Tests für die palindrome-Funktion
describe('palindrome function', () => {
    test('Otto returns true', () => {
        expect(palindrome("Otto")).toBe(true);
    });

    test('Water returns false', () => {
        expect(palindrome("Water")).toBe(false);
    });
});

// Tests für die reverseString-Funktion
describe('reverseString function', () => {
    test('Reverse any given string', () => {
        expect(reverseString('Water')).toBe('retaW');
    });

    // Weitere Tests für reverseString können hier hinzugefügt werden
});

// Tests für die shallowObject-Funktion
describe('shallowObject function', () => {
    test('Create a clone of the object parameter', () => {
        const myObj = { person: "Hackerman", number: 42 };
        expect(shallowObject(myObj)).toEqual(myObj);
    });
});