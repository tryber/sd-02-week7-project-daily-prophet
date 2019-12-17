const selecionarVassoura = document.getElementById('vassoura');

function voar() {
  selecionarVassoura.className = 'voando';
}
selecionarVassoura.addEventListener('click', voar);