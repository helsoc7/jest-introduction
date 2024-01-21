const reverseString = require('./reverseString')

function palindrome(word) {
    return word.toLowerCase() === reverseString(word).toLowerCase()
}

module.exports = palindrome