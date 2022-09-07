// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire,
// uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti
// e quali dei numeri da indovinare sono stati individuati.

//const idTimeout = setTimeout(myFunction, 5000);



function ask_number() {
    let userNumber = parseInt(prompt('scegli numero'));
    if (isNaN(userNumber)) {
        userNumber = ask_number();

    }
    return userNumber;
}
function random_number(random_array) {
    for (let i = 0; i < 5; i++) {
        const random = Math.floor(Math.random() * 100);
        random_array.push(random);
        let html = document.getElementById('par').innerHTML += random + ' ';
    }

}

function time_function() {
    alert('30 secondi trascorsi, i numeri verranno cancellati');
    let paragrafo = document.getElementById('par').innerHTML = '';

}

function result_function() {
    let user_counter = 0;
    while (user_counter < 5) {
        user_numbers.push(ask_number())
        user_counter++;
    }

    for (let i = 0; i < 5; i++) {
        if (random_array[i] === user_numbers[i])
            right_numbers.push(random_array[i]);
    }

    let result_document = document.getElementById('result');
    result_document.innerHTML += 'Hai azzeccato ' + right_numbers.length + ' numeri:';
    console.log('Hai azzeccato', right_numbers.length, 'numeri:');
    for (let i = 0; i < right_numbers.length; i++) {
        console.log(right_numbers[i]);
        result_document.innerHTML += right_numbers;
    }
}



let counter = 0;
let random_array = [];
random_number(random_array);
console.log(random_array);

let passing_seconds = 0;

const timer = setTimeout(time_function, 30000);
const result = setTimeout(result_function, 31000);


let user_numbers = [];
let right_numbers = [];





