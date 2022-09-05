// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire,
// uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti
// e quali dei numeri da indovinare sono stati individuati.

//const idTimeout = setTimeout(myFunction, 5000);

let counter = 0;
let array = [];
const clock = setInterval(random_number(array), 2000);




function random_number(array) {
    counter++;
    if (counter <= 5) {
        const random = Math.floor(Math.random() * 100);
        array.push(random);
        let html = document.getElementById('par').innerHTML += random + ' ';
    }
    else {
        clearInterval(clock);
    }

}

console.log(array);