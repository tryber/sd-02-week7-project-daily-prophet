const compra = document.getElementById('compra');
const vassoura = document.querySelector('.vassoura');
const novaMensagem = document.getElementById('fuga');
const anuncio = document.getElementById('anuncio');
function vaiVassoura() {
  vassoura.classList.add('voar');
  setTimeout(function () {
    compra.style.display = 'none';
    novaMensagem.style.display = 'inline';
    anuncio.style.animationPlayState = 'paused';
  }, 6000);
}
compra.addEventListener('click', vaiVassoura);
vassoura.addEventListener('click', vaiVassoura);
