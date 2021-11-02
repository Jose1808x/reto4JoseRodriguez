const piedra = 'rock';
const papel = 'paper';
const tijeras = 'scissors';

const empate = 0;
const ganaste = 1;
const perdiste = 2;

const piedraBtn = document.getElementById('piedra');
const papelBtn = document.getElementById('papel');
const tijerasBtn = document.getElementById('tijeras');
const decision = document.getElementById('decision');
const userSelection = document.getElementById('userSelection');
const machineSeleccion = document.getElementById('machineSelection');

const piedra1 = document.getElementById('piedra1');
const papel1 = document.getElementById('papel1');
const tijeras1 = document.getElementById('tijeras1');

const piedra2 = document.getElementById('piedra2');
const papel2 = document.getElementById('papel2');
const tijeras2 = document.getElementById('tijeras2'); 


piedraBtn.addEventListener('click', function(){
    juego.classList.toggle('desaparece');
    eleccion.classList.toggle('muestra');
    piedra1.classList.toggle('aparece-piedra1');
    play(piedra);
})

papelBtn.addEventListener('click', function(){
    juego.classList.toggle('desaparece');
    eleccion.classList.toggle('muestra');
    papel1.classList.toggle('aparece-papel1');
    play(papel);
})

tijerasBtn.addEventListener('click', function(){
    juego.classList.toggle('desaparece');
    eleccion.classList.toggle('muestra');
    tijeras1.classList.toggle('aparece-tijeras1');
    play(tijeras);
})

volver.addEventListener('click', function reset(){
    juego.classList.remove('desaparece');
    eleccion.classList.remove('muestra');
    piedra1.classList.remove('aparece-piedra1');
    papel1.classList.remove('aparece-papel1');
    tijeras1.classList.remove('aparece-tijeras1');
    piedra2.classList.remove('aparece-piedra2');
    papel2.classList.remove('aparece-papel2');
    tijeras2.classList.remove('aparece-tijeras2');
})

function play(userOption){

    const machineOption = calcMachineOption();
    const resultado = calculaResultado(userOption, machineOption);

    switch(resultado){
        case empate:
            decision.innerHTML ='¡EMPATE!';
            break;
        case ganaste:
            decision.innerHTML = '¡GANASTE!';
            break;
        case perdiste:
            decision.innerHTML = '¡PERDISTE!';
            break;
    }
}

function calcMachineOption(){
    const numero = Math.floor(Math.random() * 3);
    switch(numero){
        case 0:
            piedra2.classList.toggle('aparece-piedra2');
        return piedra;
        case 1:
            papel2.classList.toggle('aparece-papel2');
        return papel;
        case 2:
            tijeras2.classList.toggle('aparece-tijeras2');
        return tijeras;
    }
}

function calculaResultado(userOption, machineOpcion){
    if(userOption === machineOpcion){
        return empate;
    } 
    else if(userOption === piedra){
        if (machineOpcion === papel) return perdiste;
        if (machineOpcion === tijeras) return ganaste;
    } 
    else if(userOption === papel){
        if (machineOpcion === tijeras) return perdiste;
        if (machineOpcion === piedra) return ganaste;
    }
    else if(userOption === tijeras){
        if (machineOpcion === piedra) return perdiste;
        if (machineOpcion === papel) return ganaste;
    }
}