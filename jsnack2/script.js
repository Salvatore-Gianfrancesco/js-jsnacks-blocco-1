// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

const word1 = prompt("Inserisci la prima parola")
const word2 = prompt("Inserisci la seconda parola");

const h1El = document.querySelector("h1");

if (word1.length > word2.length) {
    console.log(word2, word1);
    h1El.innerHTML = `${word2} ${word1}`;
} else if (word1.length < word2.length) {
    console.log(word1, word2);
    h1El.innerHTML = `${word1} ${word2}`;
} else {
    console.log("Le due parole hanno la stessa lunghezza");
    h1El.innerHTML = "Le due parole hanno la stessa lunghezza";
}