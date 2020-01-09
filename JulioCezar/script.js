function crescerArtigo(event) {
  const artigo = event.target;
  artigo.classList.toggle('crescer_artigo');
}

function animacaoVassoura(event) {
  const vassouraMagica = event.target;
  vassouraMagica.classList.add('vassoura');
}

const vassoura = document.querySelector('.img_vassoura');
vassoura.addEventListener('click', animacaoVassoura);
const artigos = document.querySelectorAll('.artigos');
artigos.forEach((element) => {
  element.addEventListener('click', crescerArtigo);
});
