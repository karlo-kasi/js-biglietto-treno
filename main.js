// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.
// - L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).


/* 
1 - Inizializzare / dichiarare le variabili e costanti
2 - check up se se valori sono numeri 
    utilizzare un metodoto per trasformare le stringhe in numeri parsetInt
      2.1 - definire il prezzo del biglietto con moltiplicazione
      2.2 - verifica che se sotto i 18 - applicare uno sconto del 20%, sennò niente sconto
      2.3 - verificare che se sopra i 65 anni - applicare uno sconto del 40%, sennò niente sconto 
3 - Stampare il risultato su console 
*/

// 1 - Dichiarare i Valori
let km = prompt("Quanti chilometri devi fare?", Math.floor(Math.random() * 100) + 20);
let età = prompt("Quanti anni hai?",  Math.floor(Math.random() * 100) + 10);
const euro = 0.21;

km = parseFloat(km);
età = parseInt(età);

console.log ((km), (età))

// 2 - Controlla se i valori sono numeri
if (!isNaN(età) && !isNaN(km)) {
    //se true
    console.log (`${età} e ${km} sono un numero`)
} else {
    //se foulse
    console.log (`${età} e ${km} NON sono un numero`)
}

// 2.1 Definire il prezzo del biglietto in base ai km 

let prezzoBiglietto = (km * euro);

console.log (`${prezzoBiglietto.toFixed(2)} € è il prezzo del tuo biglietto`);

//2.2 2.3 - verifica che se sotto i 18 e sopra 65 - applicare sconto 20% o 40%

let prezzoBigliettoSconto1 = (prezzoBiglietto * 0.8)
let prezzoBigliettoSconto2 = (prezzoBiglietto * 0.6)

console.log (prezzoBigliettoSconto1.toFixed(2) + " " + "€", prezzoBigliettoSconto2.toFixed(2) + " " + "€")

// 3 - Stampare il risultato in console 

if (età < 18) {
    alert(`${prezzoBigliettoSconto1.toFixed(2)} € è il prezzo del tuo biglietto`)
} else if (età >= 65) {
    alert(`${prezzoBigliettoSconto2.toFixed(2)} € è il prezzo del tuo biglietto`)
} else {
    alert (`${prezzoBiglietto.toFixed(2)} € è il prezzo del tuo biglietto`)
}


