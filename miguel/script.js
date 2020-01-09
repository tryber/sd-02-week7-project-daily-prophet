const anuncio = document.getElementsByClassName('anuncio')[0];
const vassoura = document.getElementById('img-vassoura');

anuncio.addEventListener('click', () => {
    vassoura.classList.add('animacao-js');
});

const artigo0 = document.getElementsByTagName('article')[0];
const artigo1 = document.getElementsByTagName('article')[1];

artigo0.addEventListener('click', () => {
    artigo0.classList.add('cresce-texto');
    setTimeout(() => {
        artigo0.classList.remove('cresce-texto');
    }, 5000);
});

// artigo0.addEventListener('animationend', () => {
//     artigo0.classList.remove('cresce-texto');
// });

artigo1.addEventListener('click', () => {
    artigo1.classList.add('cresce-texto');
    setTimeout(() => {
        artigo1.classList.remove('cresce-texto');
    }, 5000);
});

// artigo1.addEventListener('animationend', () => {
//     artigo1.classList.remove('cresce-texto');
// });