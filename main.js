const caminhão = ['ONR5400','230','1','2','3','4','5','6','7','8'];
const inputPlaca = document.querySelector('.placa');
const inputKm = document.querySelector('.kmRodado');

inputPlaca.addEventListener('click',function(){
    if (!inputPlaca.value) return;
    console.log(inputPlaca.value)
});