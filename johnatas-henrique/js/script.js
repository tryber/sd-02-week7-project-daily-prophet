const menuAnimado = document.querySelector('.animated-menu');
const navBar = document.querySelector('.navbar-ulist');

function clicaMenu() {
    menuAnimado.classList.toggle('change');
    navBar.classList.toggle('hide');
  }

menuAnimado.addEventListener('click', clicaMenu);
