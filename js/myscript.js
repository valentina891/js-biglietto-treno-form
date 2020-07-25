var genera = document.getElementById('genera');

genera.addEventListener("click",
    function () {
    document.getElementById('biglietto').className = "show";
    var nome = document.getElementById('nome').value;
    document.getElementById('nome-passeggero').innerHTML = nome;
    var carrozza = generaRandom(1,10);
    var codiceCp = generaRandom(90000,100000);
    document.getElementById('carrozza').innerHTML = carrozza;
    document.getElementById('codice-cp').innerHTML = codiceCp;

    var km = document.getElementById('km').value;
    var prezzo = km * 0.21;
    var messaggio = 'Sconto standard'

    var età = document.getElementById('età').value;

    if (età == 'minorenne') {
        prezzo = prezzo - prezzo * 0.2;
        var messaggio = 'Sconto minorenne';
    } else if (età == 'over65') {
        prezzo = prezzo - prezzo * 0.4;
        var messaggio = 'Sconto Over';
    }
    document.getElementById('offerta').innerHTML = messaggio;
    document.getElementById('costoBiglietto').innerHTML = prezzo.toFixed(2) + ' €';
    }
);

var annulla = document.getElementById('annulla');

annulla.addEventListener("click",
    function () {
    document.getElementById('biglietto').className = "hidden";
    var nome = document.getElementById('nome').value = '';
    var km = document.getElementById('km').value = '';
    var età = document.getElementById('età').value = '';
    }
);

function generaRandom(min,max) {
    return Math.floor(Math.random()*(max - min) + min);
}
