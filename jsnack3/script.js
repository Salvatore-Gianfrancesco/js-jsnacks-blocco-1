// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

let num;
let sum = 0;

const h1El = document.querySelector("h1");

for (let i = 0; i < 10; i++) {
    num = Number(prompt("Inserisci numero"));
    sum += num;
}

console.log("La somma tra i 10 numeri inseriti è: ", sum);
h1El.innerHTML = `La somma tra i 10 numeri inseriti è: ${sum}`
