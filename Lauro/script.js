window.addEventListener("load", AnimaInicial);

let vassoura = document.getElementById('vassoura2');

function expandeArtigo () {
	event.target.classList.toggle('cresce');
}

vassoura.addEventListener('click', function () {
	vassoura.classList.toggle('anima-vassoura');
})

function AnimaInicial() {
	const pomo = document.getElementById('pomo-img');
	setTimeout(function() {
		pomo.classList.add('animacao-inicial');
	}, 3000);
}
