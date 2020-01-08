const menuAnimado = document.querySelector('.animated-menu');
const navBar = document.querySelector('.navbar-ulist');
const divBroom = document.querySelector('.broom-img');
const divAnuncio = document.querySelector('.mr-1e');
const underImg = document.querySelector('.under-img');
const containerLeads = document.querySelector('.container-leads');
const containerMain = document.querySelector('.container-main');

const arrTextos = [underImg, navBar, containerLeads, containerMain];

function clicaMenu() {
  menuAnimado.classList.toggle('change');
  navBar.classList.toggle('hide');
}

menuAnimado.addEventListener('click', clicaMenu);

function clicaBroom() {
  divBroom.classList.add('broom-animation');
}

divAnuncio.addEventListener('click', clicaBroom);

function classNoTexto() {
  event.target.classList.toggle('text-animation');
}

function clicaTexto(item) {
  item.addEventListener('click', classNoTexto);
}

arrTextos.forEach(clicaTexto);
