const menuAnimado = document.querySelector('.animated-menu');
const navBar = document.querySelector('.navbar-ulist');
const divBroom = document.querySelector('.broom-img');
const divAnuncio = document.querySelector('.mr-1e');

function clicaMenu() {
  menuAnimado.classList.toggle('change');
  navBar.classList.toggle('hide');
}

menuAnimado.addEventListener('click', clicaMenu);

function clicaBroom() {
  divBroom.classList.add('broom-animation');
}

divAnuncio.addEventListener('click', clicaBroom);
