const caminhão = ['ONR5400','230','1','2','3','4','5','6','7','8'];
const inputPlaca = document.querySelector('.placa');
const inputKm = document.querySelector('.kmRodado');
const btnPlaca = document.querySelector('.btplaca')

function criaTarefa(textoInput){
    console.log(textoInput)
}

function criarDivPneu() {

    const divPneu = document.createElement('div');
    divPneu.id = 'pneu';
    const elementosL = ['PNEU', 'KM RODADO:', 'ESTÁGIO DE RECAPAGEM', 'ESTIMATIVA DE DURAÇÃO'];
    elementosL.forEach(texto => {
        const span = document.createElement('span');
        span.textContent = texto;
        divPneu.appendChild(span);
        divPneu.appendChild(document.createElement('br'));
    });
    const botao = document.createElement('button');
    botao.textContent = 'ADD RECAPAGEM';
    botao.style.fontSize = 'xx-small';
    divPneu.appendChild(botao);
    return divPneu;
}

btnPlaca.addEventListener('click',function(){
    if (!inputPlaca.value) return;
    criaTarefa(inputPlaca.value);
});

criarDivPneu();