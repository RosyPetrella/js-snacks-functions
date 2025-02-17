/* Scrivi una funzione che accetti una stringa e 
restituisca il numero di vocali contenute al suo interno */

const word = "javascript";

// Dichiara la funzione qui.

function countVowels(string) {
  let count = 0;
  const vowels = "aeiou";
  for (let i = 0; i < string.length; i++) {
    const thisLetter = string[i];
    console.log(thisLetter);
    if (vowels.includes(thisLetter)) {
      count++;
    }
  }
  return count;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(countVowels(word));
//Risultato atteso se si passa 'javascript': 3 (a, a, i)
