// Mostra os elementos com efeito quando aparecem na tela
var elementos = document.querySelectorAll('.aparecer');

function mostrarNaTela() {
    for (var i = 0; i < elementos.length; i++) {
        var posicao = elementos[i].getBoundingClientRect().top;
        if (posicao < window.innerHeight - 60) {
            elementos[i].classList.add('visivel');
        }
    }
}

window.addEventListener('scroll', mostrarNaTela);
window.addEventListener('load', mostrarNaTela);

// Ano automatico no rodape
document.getElementById('ano').textContent = new Date().getFullYear();
