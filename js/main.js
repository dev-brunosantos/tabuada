// DECLARAÇÕES DE VARIÁVIES
var numerais = document.querySelectorAll('.numerais')
var numMultiplicador = document.querySelectorAll('.multiplicador')
var resultados = document.querySelectorAll('.resultados')

var multiplicador = document.getElementById('visor')

const btnMultiplicar = document.getElementById('multiplicar');
const btnApagar = document.getElementById('apagar');

// ____________________________________________

btnMultiplicar.addEventListener('click', multiplicar)
btnApagar.addEventListener('click', apagar)

// __________________________________________
// FUNÇÕES

function multiplicar() {
    for(var i=0; i<numMultiplicador.length; i++) {

        numMultiplicador[i].textContent = multiplicador.value;
        resultados[i].textContent = numerais[i].textContent * multiplicador.value; 
    }
}

function apagar() {
    
    for(var valor=0; valor<numMultiplicador.length; valor++) {
        visor.value = ""
        
        numMultiplicador[valor].textContent = multiplicador.value;
        resultados[valor].textContent = multiplicador.value; 
    }
}