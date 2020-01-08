const vassoura = document.getElementsByClassName('imagem-nimbus')[0];
const aumenta1 = document.querySelectorAll('section');

vassoura.addEventListener( 'click' , function voaNimbus() {
  vassoura.classList.add('nimbus-voando');
});

aumenta1.forEach( eventoClick );

function eventoClick ( event ) {
  event.addEventListener('click', aumentaSection);
}

function aumentaSection() {
  event.target.classList.add('aumentaTexto');
  event.target.addEventListener('animationend', () => event.target.classList.remove('aumentaTexto'));
}
