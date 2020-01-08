const bruxa = document.querySelector('img.bruxa');

bruxa.addEventListener('mouseover', (e) => {
  e.target.style.animationPlayState = 'paused';
});

bruxa.addEventListener('mouseleave', (e) => {
  e.target.style.animationPlayState = 'running';
});

const nimbus = document.querySelector('img.nimbus');

nimbus.addEventListener('click', (e) => {
  e.target.style.animationPlayState = 'running';
});

const articles = document.querySelectorAll('article');
const h2 = document.querySelectorAll('h2');
const h1 = document.querySelectorAll('h1');

const array = [].concat(...articles, ...h2, ...h1);

array.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.target.style.animationPlayState = 'running';
  });
});


