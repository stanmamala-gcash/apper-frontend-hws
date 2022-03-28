// Mamala, Stanley Jr. D.
// Front-end Development Engineering
// Homework 1-5: Convert To Vowels

function convertToVowels(word) {
    const vowels = {'a':'A', 'e':'E', 'i':'I', 'o':'O', 'u':'U'}
    voweled_word = ''
  

    for (i = 0; i < word.length; i++) {
        if (word.charAt(i).toLowerCase() in vowels)
        voweled_word = voweled_word.concat(word.charAt(i))
    }

    return voweled_word
}

const word = 'thIsissOmeword'
const wordWithOnlyVowels = convertToVowels(word)
console.log(wordWithOnlyVowels)