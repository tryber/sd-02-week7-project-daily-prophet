const vassouraAnimada1 = document.getElementById('vassoura1');
const vassouraAnimada2 = document.getElementById('vassoura2');
const vassouraAnimada3 = document.getElementById('vassoura3');

const articles = document.querySelectorAll('article');

for (let i = 0; i < articles.length; i+=1) {
  articles[i].addEventListener('click', function () {
      articles[i].setAttribute('class', 'articleAnimado');
    });
  articles[i].addEventListener('animationend', function() {
      articles[i].removeAttribute('class', 'articleAnimado');
    });
};

console.log(articles)

vassouraAnimada1.addEventListener('click', function () {
  vassouraAnimada1.setAttribute('class', 'vassoura');
});
vassouraAnimada1.addEventListener('animationend', function () {
  vassouraAnimada1.removeAttribute('class', 'vassoura');
});

vassouraAnimada2.addEventListener('click', function () {
  vassouraAnimada2.setAttribute('class', 'vassoura');
});
vassouraAnimada2.addEventListener('animationend', function () {
  vassouraAnimada2.removeAttribute('class', 'vassoura');
});

vassouraAnimada3.addEventListener('click', function () {
  vassouraAnimada3.setAttribute('class', 'vassoura');
});
vassouraAnimada3.addEventListener('animationend', function () {
  vassouraAnimada3.removeAttribute('class', 'vassoura');
});
