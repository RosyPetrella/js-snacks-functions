/* Scrivi una funzione che accetti una stringa contenente un nome e 
restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = "Mario";

// Dichiara la funzione qui.
function logCiaoUserName(name) {
  console.log("Ciao " + name);
}

logCiaoUserName(userName);

//Risultato atteso se si passa 'Mario': // ciao Mario
