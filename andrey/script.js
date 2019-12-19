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
