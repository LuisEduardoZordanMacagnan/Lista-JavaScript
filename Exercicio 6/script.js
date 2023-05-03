let texto = document.getElementById('texto');
let lista = document.getElementById('lista');

function adicionaTexto(){
    div = document.createElement('div');
    div.innerHTML = texto.value;
    lista.appendChild(div);
}