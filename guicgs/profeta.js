const vassoura = document.getElementById('vassoura');
vassoura.addEventListener('click', function() {
  vassoura.classList.add('animacao-vassoura');
}

const textos = document.getElementsByClassName('texto-artigo');
for (const texto of textos) {
  texto.addEventListener ('click', function () {
    texto.style.transform = 'scale(1.5)';
    texto.style.fontWeight = 'bold';
    texto.addEventListener('click', function () {
      texto.style.transform = 'scale(1)';
      texto.style.fontWeight = 'normal';
    });
  });
}
