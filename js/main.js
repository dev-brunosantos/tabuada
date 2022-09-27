// DECLARAÇÃO DE VAIÁVIES 
var numeroMultilicador = document.getElementById('visor');
var numerais = document.querySelectorAll('.numerais');
var resultados = document.querySelectorAll('.valor')
const btnResultado = document.getElementById('resultado');
var teste;
var linhasDaTabela = document.querySelectorAll('.linhas');

// DECLARAÇÃO DE FUNÇÕES 
btnResultado.addEventListener('click', multiplicar);

function multiplicar() {
    for(var i=0; i<numerais.length;i++) {
        teste = numerais[i].textContent * numeroMultilicador.value;
        
        var num = document.createElement('td');
        num.classList.add('linhas-criadas')
        num.textContent = teste;
        
        for(var valor=0; valor<linhasDaTabela.length; valor++) {
            linhasDaTabela[i].appendChild(num)
        }
    }
}
