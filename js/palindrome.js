let userWord = prompt('Scrivi una parola')
let userWordNeutralized = userWord.toLowerCase();

function isPalindrome(word) { // verifica se la parola è palindroma ||| ritorna un valore boolean
  let wordLength = word.length;
  let result;

  for (let i = 0; i < wordLength; i++) {
    if (word[i] === word[(wordLength - 1) - i]) {
      result = true
    } else {
      result = false
    }
  }
  return result
}

let verifyPalindrome = isPalindrome(userWordNeutralized)

if (verifyPalindrome) {
  console.log('La parola "' + userWord + '" è palindroma')
} else {
  console.log('La parola "' + userWord + '" non è palindroma')
}