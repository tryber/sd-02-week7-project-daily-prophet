const selecionarVassoura = document.getElementById('broom');
const increaseSize = document.querySelectorAll('section');

function biggerSection() {
  event.target.classList.add('biggerText');
  event.target.addEventListener('animationend', () => event.target.classList.remove('biggerText'));
}

function clickEvent(event) {
  event.addEventListener('click', biggerSection);
}

increaseSize.forEach(clickEvent);

function start() {
  selecionarVassoura.className = 'nimbus2000';
}
selecionarVassoura.addEventListener('click', start);
