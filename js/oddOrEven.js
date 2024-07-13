let userChoice = prompt('Scegli tra "pari" o "dispari"'); //string | null
let userNumber = parseInt(prompt('Scegli un numero da 1 a 5')) //number | NaN

function randomNumber1_5() { // numero casuale intervallo 1-5
  return Math.floor((Math.random() * 5) + 1);
}

let pcNumber = randomNumber1_5();

let sumChoicedNumber = userNumber + pcNumber;

function isOddOrEven(number) { // stabilisce se il numero dato è pari o dispari ritornando la stringa con il risultato

  if ((number % 2) === 0) {
    return 'pari'
  } else {
    return 'dispari'
  }
}

let winner = isOddOrEven(sumChoicedNumber);

if (userChoice === winner) {
  console.log('Ha vinto il giocatore')
} else {
  console.log('Ha vinto il PC')
}