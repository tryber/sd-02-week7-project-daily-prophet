let selecionarVassoura = document.getElementById('vassoura');

selecionarVassoura.addEventListener('click', voar);
function voar(){
    selecionarVassoura.className = 'voando';
}

