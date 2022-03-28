// Mamala, Stanley Jr. D.
// Front-end Development Engineering
// Homework 1-4: Palindrome Checker

function reverse(word) {
    n = word.length - 1
    let reversed = ''
    for (i = n; i >= 0; i--)
        reversed = reversed.concat(word.charAt(i))
    return reversed
}

function isPalindrome(word) {
    // ASSUMPTION: NULL and single-letter words are not palindromes
    if (word.length == 1 || word.length == 0)
        return false
  
    let reversed_word = reverse(word)
    if (word == reversed_word)
        return true
    else
        return false
}

// TRIVIA: this is the longest palindromic word
const word = "saippuakivikauppias"
const bool = isPalindrome(word)
console.log(bool)