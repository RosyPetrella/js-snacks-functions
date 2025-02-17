/* Scrivi una funzione che accetti un'array di stringhe e una lettera 
e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

function stringLetter(arr, letter) {
  const filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    const thisName = arr[i];
    const thisLetter = thisName.charAt(0).toUpperCase();
    console.log(thisLetter);
    if (thisLetter == letter.toUpperCase()) {
      filteredArr.push(thisName);
    }
  }
  return filteredArr;
}

console.log(stringLetter(names, "a"));

// Dichiara la funzione qui.

// Invoca la funzione qui e stampa il risultato in console

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
