// L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore.

const num1 = prompt("Inserisci il primo numero")
const num2 = prompt("Inserisci il secondo numero");

const h1El = document.querySelector("h1");

if (isNaN(num1) || isNaN(num2)) {
    console.log(`Almeno uno dei due valori inseriti non è un numero`);
    h1El.innerHTML = `Almeno uno dei due valori inseriti non è un numero`;
} else {
    if (num1 > num2) {
        console.log(`Il maggiore tra i due numeri inseriti è il primo: ${num1}`);
        h1El.innerHTML = `Il maggiore tra i due numeri inseriti è il primo: ${num1}`;
    } else if (num1 < num2) {
        console.log(`Il maggiore tra i due numeri inseriti è il secondo: ${num2}`);
        h1El.innerHTML = `Il maggiore tra i due numeri inseriti è il secondo: ${num2}`;
    } else {
        console.log(`I numeri sono uguali`);
        h1El.innerHTML = `I numeri sono uguali`;
    }
}

