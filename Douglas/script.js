const compra = document.getElementById('compra');
const vassoura = document.querySelector('.vassoura');
const novaMensagem = document.getElementById('fuga');
const anuncio = document.getElementById('anuncio');
const article = document.getElementById('divArticle');
const aside = document.getElementById('aside');
function vaiVassoura() {
  vassoura.classList.add('voar');
  setTimeout(function () {
    compra.style.display = 'none';
    novaMensagem.style.display = 'inline';
    anuncio.style.animationPlayState = 'paused';
  }, 6000);
}
function textoGrande() {
  this.classList.add('animaTexto');
}
function back() {
  this.classList.remove('animaTexto');
}
aside.addEventListener('click', textoGrande);
aside.addEventListener('animationend', back);
article.addEventListener('click', textoGrande);
article.addEventListener('animationend', back);
compra.addEventListener('click', vaiVassoura);
vassoura.addEventListener('click', vaiVassoura);
