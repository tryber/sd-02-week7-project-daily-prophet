const vassoura = document.getElementById('vassoura');
vassoura.addEventListener('click', function () {
  vassoura.classList.add('animacao-vassoura');
});

const textos = document.getElementsByClassName('texto-artigo');
for (let i = 0; i < textos.length; i += 1) {
  textos[i].addEventListener('click', function () {
    textos[i].style.transform = 'scale(1.5)';
    textos[i].style.fontWeight = 'bold';
    textos[i].addEventListener('click', function () {
      textos[i].style.transform = 'scale(1)';
      textos[i].style.fontWeight = 'normal';
    });
  });
}
