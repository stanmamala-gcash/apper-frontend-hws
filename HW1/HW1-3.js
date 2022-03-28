// Mamala, Stanley Jr. D.
// Front-end Development Engineering
// Homework 1-3: Word Reverse

function reverse(word) {
    n = word.length - 1
    let reversed = ''
    for (i = n; i >= 0; i--)
        reversed = reversed.concat(word.charAt(i))
    return reversed
}

const word = 'hello'
const reversedWord = reverse(word)
console.log(reversedWord)