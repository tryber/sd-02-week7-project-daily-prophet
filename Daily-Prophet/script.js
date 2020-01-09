const vassoura = document.getElementsByClassName('imagem-nimbus')[0];
const aumenta1 = document.querySelectorAll('section');
const pauseAnimation = document.querySelector('.cobrePegadas');
const pegadas = document.querySelector('#pegadas');
const severus = document.querySelector('.cover');

vassoura.addEventListener('click', function voaNimbus() {
  vassoura.classList.add('nimbus-voando');
});

function aumentaSection() {
  event.target.classList.add('aumentaTexto');
  event.target.addEventListener('animationend', () => event.target.classList.remove('aumentaTexto'));
}

function eventoClick(event) {
  event.addEventListener('click', aumentaSection);
}

aumenta1.forEach(eventoClick);


const pausaAnimacao = () => {
  severus.style.animationPlayState = 'paused';
  pegadas.style.animationPlayState = 'paused';
  pauseAnimation.style.cursor = 'pointer';
};

const rodaAnimacao = () => {
  severus.style.animationPlayState = 'running';
  pegadas.style.animationPlayState = 'running';
};

pauseAnimation.addEventListener('mouseover', pausaAnimacao);
pauseAnimation.addEventListener('mouseout', rodaAnimacao);
