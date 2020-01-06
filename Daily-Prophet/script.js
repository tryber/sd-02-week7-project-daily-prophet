const vassoura = document.getElementsByClassName('imagem-nimbus')[0]
const aumenta1 = document.querySelectorAll('section')

vassoura.addEventListener('click', function voaNimbus() {
  vassoura.classList.add('nimbus-voando')
})

function mudaClasse() {
event.target.classList.toggle('aumentaTexto');
}

function clicaTexto(item) {
item.addEventListener('click', mudaClasse);
}

aumenta1.forEach(clicaTexto);
