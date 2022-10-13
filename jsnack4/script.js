// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
// chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

const guestList = [
    "Giuseppe",
    "Maria",
    "Giovanni",
    "Anna",
    "Antonio",
    "Giuseppina",
    "Mario",
    "Rosa",
    "Luigi",
    "Angela",
    "Francesco",
    "Giovanna",
    "Angelo",
    "Teresa",
    "Vincenzo",
    "Lucia",
    "Pietro",
    "Carmela",
    "Salvatore",
    "Caterina",
    "Carlo",
    "Francesca"
];

const h1El = document.querySelector("h1");

let found = false;
const guest = prompt("Inserisci il tuo nome");

let i = 0;
while (i < guestList.length && !found) {
    if (guest === guestList[i]) {
        found = true;
    } else {
        i++;
    }
}

if (found) {
    console.log("Puoi partecipare alla festa");
    h1El.innerHTML = "Puoi partecipare alla festa";
} else {
    console.log("Non puoi partecipare alla festa");
    h1El.innerHTML = "Non puoi partecipare alla festa";
}








