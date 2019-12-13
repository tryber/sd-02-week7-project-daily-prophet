function expandeArtigo () {
	event.target.classList.toggle('cresce');
}

let vassoura = document.getElementById('vassoura');

vassoura.addEventListener('click', function () {
	vassoura.classList.toggle('anima-vassoura');
})