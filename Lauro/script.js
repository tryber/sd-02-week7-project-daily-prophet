const vassoura = document.querySelector('.vassoura');

const vassouraMobile = document.querySelector('#vassoura-horiz');

const art1 = document.getElementById('art1');

const art2 = document.getElementById('art2');

const art3 = document.getElementById('art3');

const art4 = document.getElementById('art4');


function expandeArtigo() {
  event.target.classList.add('cresce');
  event.target.addEventListener('animationend', function () {
    event.target.classList.remove('cresce');
  });
}

function AnimaVassoura() {
  event.target.classList.toggle('anima-vassoura');
}

function AnimaInicial() {
  const pomo = document.getElementById('pomo');
  setTimeout (function() {
    pomo.classList.add('anima-pomo');
  }, 3000);
}

window.addEventListener('load', AnimaInicial);

art1.addEventListener('click', expandeArtigo);

art2.addEventListener('click', expandeArtigo);

art3.addEventListener('click', expandeArtigo);

art4.addEventListener('click', expandeArtigo);

vassoura.addEventListener('click', AnimaVassoura);

vassouraMobile.addEventListener('click', AnimaVassoura);
