let userWord = prompt('Scrivi una parola')
let userWordNeutralized = userWord.toLowerCase();

function isPalindrome(word) { // verifica se la parola è palindroma ||| ritorna un valore boolean
  let wordLength = word.length;

  for (let i = 0; i < Math.floor(wordLength / 2); i++) {
    if (word[i] !== word[(wordLength - 1) - i]) {
      return false
    }
  }
  return true
}

let verifyPalindrome = isPalindrome(userWordNeutralized)

if (verifyPalindrome) {
  console.log('La parola "' + userWord + '" è palindroma')
} else {
  console.log('La parola "' + userWord + '" non è palindroma')
}