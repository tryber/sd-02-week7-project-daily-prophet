window.addEventListener("load", AnimaInicial);

const vassoura = document.querySelector('.vassoura');

function expandeArtigo () {
    event.target.classList.add('cresce');
    event.target.addEventListener('animationend', function () {
        event.target.classList.remove('cresce');
    })
}

vassoura.addEventListener('click', function () {
	vassoura.classList.toggle('anima-vassoura');
})

function AnimaInicial() {
	const pomo = document.getElementById('pomo');
	setTimeout(function() {
		pomo.classList.add('anima-pomo');
	}, 3000);
}