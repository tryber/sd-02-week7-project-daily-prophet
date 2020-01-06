const vassoura = document.getElementById('vassoura');
vassoura.addEventListener('click', broomAnimation);
function broomAnimation() {
  vassoura.classList.add('animacao-vassoura');
}

const textos = document.getElementsByClassName('texto-artigo');
for (let texto of textos) {
  texto.addEventListener('click', function() {
    texto.style.transform = 'scale(1.5)';
    texto.style.fontWeight = 'bold';
  })
}

// const textoAnimado = document.getElementsByClassName('animacao-texto');
// textoAnimado.addEventListener('change', animarTexto);
// function animarTexto() {
//   textoAnimado.style.width = "150%";
//   textoAnimado.style.textDecoration = "bold";
// }