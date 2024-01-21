const reverseString = require('./reverseString');

// Gruppierung der Tests für reverseString
describe('reverseString function', () => {
    test('Reverse any given string', () => {
        expect(reverseString('Water')).toBe('retaW');
    });

    // Weitere Tests für reverseString können hier hinzugefügt werden
});