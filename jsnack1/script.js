// L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore.

const num1 = prompt("Inserisci il primo numero")
const num2 = prompt("Inserisci il secondo numero");

if (num1 > num2) {
    console.log(`Il maggiore tra i due numeri inseriti è il primo: ${num1}`);
} else if (num1 < num2) {
    console.log(`Il maggiore tra i due numeri inseriti è il secondo: ${num2}`);
} else {
    console.log(`I numeri sono uguali`);
}