//dichiarqazione variabili
let classe, finalPrice;
const kmPrice = 0.21;


//chiedere all’utente il numero di chilometri che vuole percorrere
let chilometri = parseInt (prompt("inserisci chilometri da percorrere"));
console.log("chilometri da percorrere = ", chilometri);


//chiedere l’età del passeggero
let userAge = parseInt (prompt("inserisci la tua età"));
console.log("età passeggero = ", userAge);


//il prezzo del biglietto è di 0.21 € al km
let basePrice = chilometri * kmPrice;
console.log("prezzo base biglietto = €", basePrice,);


//calcolare il prezzo totale del viaggio
if (userAge < 18) {
    finalPrice = basePrice * 0.8;
    console.log("prezzo minor = €", finalPrice);
} else if (userAge >= 65){
    finalPrice = basePrice * 0.6;
    console.log("prezzo senior = €", finalPrice);
} else{
    finalPrice = basePrice;
    console.log("prezzo normale = €", finalPrice);
}


//output del prezzo finale con massimo due decimali

document.getElementById("prezzo_biglietto").innerHTML = ("€" + finalPrice);