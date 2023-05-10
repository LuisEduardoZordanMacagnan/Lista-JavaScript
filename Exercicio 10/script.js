let l = document.getElementById('lista');
let input = document.getElementById('input');
let validacao = true;
const array = [];

function inserir() {
    validacao = true;
    for (var i = 0; i < array.length; i++) {
        if (input.value == array[i]) {
            validacao = false;
        }
    }
    if (validacao) {
        array.push(input.value);
        listar();
    } else {
        window.alert('Elemento ja existente');
    }
}

function apagar() {
    for (var i = 0; i < array.length; i++) {
        if (input.value == array[i]) {
            array.splice(i, 1);
            listar();
        }
    }
}

function listar() {
    l.innerHTML = "";
    for (var i = 0; i < array.length; i++) {
        p = document.createElement('p');
        p.innerHTML = array[i];
        l.appendChild(p);
    }
}