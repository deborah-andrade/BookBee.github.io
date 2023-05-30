
let tempoMilesimos = 0;
let tempoSegundos = 0;
let tempoMinutos = 0;
let tempoHora = 0;
let cronometro;

function atualizarCronometro(){
    tempoMilesimos++;

    if(tempoMilesimos == 100){
        tempoMilesimos = 0;
        tempoSegundos++;
    }

    if(tempoSegundos == 60){
        tempoSegundos = 0;
        tempoMinutos++;
    }

    if(tempoMinutos == 60){
        tempoMinutos = 0;
        tempoHora++;
    }

    document.querySelector('.tempo.Milesimos').textContent = pad(tempoMilesimos);
    document.querySelector('.tempo.Segundos').textContent = pad(tempoSegundos);
    document.querySelector('.tempo.Minutos').textContent = pad(tempoMinutos);
    document.querySelector('.tempo.horas').textContent = pad(tempoHora);
}
  
function pad(numero){
    return numero.toString().padStart(2, '0');
}
    
function  iniciarCronometro() {
    cronometro = setInterval(atualizarCronometro, 10);
};
    
function paraCronometro () {
    clearInterval(cronometro);
};
    
function zerarCronometro(){
    // clearInterval(cronometro);
    tempoMilesimos = 0;
    tempoSegundos = 0;
    tempoMinutos = 0;
    tempoHora = 0;
    document.querySelector('.tempo.Milesimos').textContent = '00';
    document.querySelector('.tempo.Segundos').textContent = '00';
    document.querySelector('.tempo.Minutos').textContent ='00';
    document.querySelector('.tempo.Horas').textContent = '00';
}

  
  