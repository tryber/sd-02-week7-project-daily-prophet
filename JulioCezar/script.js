const vassoura = document.querySelector('.img_vassoura');
vassoura.addEventListener('click', animacaoVassoura);
const artigos = document.querySelectorAll('.artigos');
artigos.forEach((element) => {
  element.addEventListener('click', crescerArtigo);
});

function crescerArtigo(event) {
  event.target.classList.add('crescer_artigo');
  event.target.style.transform = 'scale(1.5)';
  event.target.style.fontWeight = 1000;
}

function animacaoVassoura(event) {
  event.target.classList.add('vassoura');
}
