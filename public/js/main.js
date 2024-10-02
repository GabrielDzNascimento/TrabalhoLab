import sqlite3 from 'sqlite3'
import { open } from 'sqlite';

async function criarTabelaUsuarios (){
    const db = await open({
        filename: './trabalho/banco.db',
        driver: sqlite3.Database,
    });

    db.run(`CREATE TABLE IF NOT EXISTS caminhões (Placa TEXT PRIMARY KEY, KM INTENGER, ID1 TEXT, ID2 TEXT, ID3 TEXT, ID4 TEXT, ID5 TEXT, ID6 TEXT, ID7 TEXT, ID8 TEXT)`

    );
    
}

criarTabelaUsuarios();


async function buscarPlacaEExibir(placaCarro) {
    const db = await open({
        filename: './trabalho/banco.db',
        driver: sqlite3.Database,
    });

    db.get('SELECT Placa FROM caminhões WHERE id = ?', [placaCarro], (err, row) => {
        if (err) {
            console.error(err.message);
            return;
        }

        if (row) {
            const elementoPlaca = document.getElementById('placa');
            elementoPlaca.textContent = row.placa;
        } else {
            console.log('Placa não encontrada.');
        }
    });

    db.close();
}


buscarPlacaEExibir('ONR5400'); 

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


const container = document.getElementById('meu-container');
const novaDivPneu = criarDivPneu();
container.appendChild(novaDivPneu);