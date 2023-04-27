//dichiarqazione variabili
let classe;
const kmPrice = 0.21;


//chiedere all’utente il numero di chilometri che vuole percorrere
let chilometri = parseInt (prompt("inserisci chilometri da percorrere"));
console.log("chilometri da percorrere = ", chilometri);


//chiedere l’età del passeggero
let userAge = parseInt (prompt("inserisci la tua età"));
console.log("età passeggero = ", userAge);


//definire classe di età del passeggero
if (userAge < 18){
    classe = "minorenne";
} else if (userAge >= 65){
    classe = "senior";
}else {
    classe = "maggiorenne";
}

console.log("classe di età = ", classe);



//il prezzo del biglietto è di 0.21 € al km
let basePrice = chilometri * kmPrice;
console.log("prezzo base biglietto = €", basePrice,);


//calcolo prezzi scontati
if (classe = "minorenne") {
    let minorPrice = basePrice * 0.8;
    console.log("prezzo minor = €", minorPrice);
} else if (classe = "senior"){
    let seniorPrice = basePrice * 0.6;
    console.log("prezzo senior = €", seniorPrice);
} else{
    
}


//calcolare il prezzo totale del viaggio:


//output del prezzo finale con massimo due decimali