const palindrome = require('./palindrome')

test('Otto returns true', () => {
    expect(palindrome("Otto")).toBe(true)
  })

  test('Water returns false', () => {
    expect(palindrome("Water")).toBe(false)
  })