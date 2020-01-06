const publi = document.querySelector('.ads');
const broom = document.querySelector('.broom-img');

function createClass (){
    broom.classList.add('broom-animation');
}

publi.addEventListener ('click', createClass);
