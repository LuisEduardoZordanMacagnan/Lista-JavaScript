let botao = document.getElementById('botao');
botao.style.position = 'absolute';

function move() {
    botao.style.top = Math.floor(Math.random() * 500) + 'px';
    botao.style.left = Math.floor(Math.random() * 1000) + 'px';
    console.log('foi');
}