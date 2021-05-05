


/*
Il computer deve generare 16 numeri casuali tra 1 e 100.
I numeri non possono essere duplicati.
In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

BONUS: (da fare solo se funziona tutto il resto)
all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
con difficoltà 0 => tra 1 e 100
con difficoltà 1 => tra 1 e 80
con difficoltà 2 => tra 1 e 50
Consigli del giorno: :party_wizard:
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio:
Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Proviamo prima con pochi numeri, inserire 86 numeri ogni volta potrebbe essere un po’ scocciante :occhiolino:
Le validazioni e i controlli possiamo farli anche in un secondo momento.
Ricordatevi che se non sappiamo quante volte dobbiamo fare una cosa ci serve…
*/

//Il computer deve generare 16 numeri casuali tra 1 e 100.
function GenerationBombs(min, max) {
    return Math.floor(Math.random() * max - min +1) + min
}
// var bombs = GenerationBombs(1, 100);
// console.log(bombs);

// I numeri non possono essere duplicati, quindi li devo INSERIRE in un array,
// fino a quando non arrivo a 16 bombe,
// e poi per poterli confrontare se sono inclusi o meno
var bombsBox = [];

//cicla fino a quando il contenitore bombe è minore di 16, delle bombe generate da 1 a 100
while (bombsBox.length < 16) {
    //delle bombe generate da 1 a 100
    var bombs = GenerationBombs(1, 100);
    if (!bombsBox.includes(bombs)) {
        //se nell'array non sono incluse le bombe generate, puschiale nell'array
        bombsBox.push(bombs);
    }

}
console.log(bombsBox.sort(function(a, b){return a-b}));

// L’utente non può inserire più volte lo stesso numero.

// in un array vuoto,
var numbersInserted = [];


// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.

// cicla fino a che, array utente non è uguale a (100 - 16)
var punteggio = 0;
var player;
var i = 0;
// fino a quando questa condizione è vera
while (numbersInserted.length < (20 - 16)) {
// continua a chiedermi numeri
    var userNumber = Number(prompt('dammi un numero'));

    // se, nell'array utente i numeri utente sono inclusi o il numero utente non è minore di 1 o numero utente non è maggiore di 100,
    if (numbersInserted.includes(userNumber) || userNumber < 1 || userNumber > 100 || isNaN(userNumber)) {
        //     il numero è sbagliato
        console.log('il numero è sbagliato');
    // altrimenti,
    }else {
    // nell'array utente pushia il numero utente
        numbersInserted.push(userNumber);
        punteggio++
        console.log(numbersInserted);
        // i++;

        if (bombsBox.includes(userNumber)) {
            player = `l'utente ha perso`;
            // punteggio = punteggio + 1
            // console.log(player);
            break;

        }else if (userNumber === (20 - 16)) {
            player = `l'utente ha vinto`;

            // console.log(player);

        }
    }

    // Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
    // La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
    // Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.


    }//while

console.log(`${player} con il punteggio di ${punteggio}`);







// var userNumber = Number(prompt('inserisci numeri'));
// if (!numbersInserted.includes(userNumber)  ) {
//         // deve puschiare,
//         numbersInserted.push(userNumber);
//         console.log(numbersInserted);
//
// }else if (numbersInserted.includes(userNumber)|| userNumber <= 1 || userNumber > 100) {
//             var userNumberNew = Number(prompt('questo valore non è giusto, danne un\' altro'));
//             console.log('questo valore non è giusto, danne un\' altro');
//             console.log(numbersInserted);
//
//             if (!numbersInserted.includes(userNumberNew)) {
//                 numbersInserted.push(userNumberNew);
//                 console.log('adesso questo valore è giusto');
//                 console.log(numbersInserted);
//             }
//
//         }
