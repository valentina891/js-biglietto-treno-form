var genera = document.getElementById('genera');

genera.addEventListener("click",
    function () {
    document.getElementById('biglietto').className = "show";
    var nome = document.getElementById('nome').value;
    document.getElementById('nome')
    }
);

var annulla = document.getElementById('annulla');

annulla.addEventListener("click",
    function () {
    document.getElementById('biglietto').className = "hidden";
    }
);
