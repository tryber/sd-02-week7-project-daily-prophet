const publi = document.querySelector('.ads');
const broom = document.querySelector('.broom-img');
const sectionArr = document.querySelectorAll('section');

function createClass() {
  broom.classList.add('broom-animation');
}
publi.addEventListener('click', createClass);

function growSection() {
    const item = event.target;
    item.classList.toggle('bigger-section');
}

function clickOn(item){
    item.addEventListener('click', growSection);
    console.log('rolou');
}

sectionArr.forEach(clickOn);
