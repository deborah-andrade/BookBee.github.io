
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
    clearInterval(cronometro);
    tempoMilesimos = 0;
    tempoSegundos = 0;
    tempoMinutos = 0;
    tempoHora = 0;
    document.querySelector('.tempo.Milesimos').textContent = '00';
    document.querySelector('.tempo.Segundos').textContent = '00';
    document.querySelector('.tempo.Minutos').textContent ='00';
    document.querySelector('.tempo.Horas').textContent = '00';
}

const playBtn = document.querySelector(".play");
const lapBtn = document.querySelector(".lap");
const resetBtn = document.querySelector(".reset");
const minute = document.querySelector(".min");
const second = document.querySelector(".sec");
const centiSecond = document.querySelector(".msec");
const laps = document.querySelector(".laps");
const clearAllBtn = document.querySelector(".lap-clear-btn");
const bg = document.querySelector(".outer-circle");
let isplay = false;
let minCounter = 0;
let min;
let secCounter = 0;
let sec;
let centiCounter =0;
let centiSec;
let lapId = 0;
let timerInterval;

function startTimer(){
    if(!isplay){
        isplay = true;
        playBtn.textContent = "Pause";
        timerInterval = setInterval(updateTimer, 10);
    }else{
        isplay = false;
        playBtn.textContent = "Resume";
        clearInterval(timerInterval);
    }
}

function updateTimer() {
    centiCounter++;
    if(centiCounter === 100){
        centiCounter= 0;
        secCounter++;
    }
    if(secCounter === 60){
        secCounter = 0;
        minCounter++;
    }
    min = minCounter.toString().padStart(2, "0");
    sec = secCounter.toString().padStart(2, "0");
    centiSec = centiCounter.toString().padStart(2, "0");
    minute.textContent = min + " :";
    second.textContent = " " + sec + " :";
    centiSecond.textContent = " " + centiSec;
}

function resetTimer(){
    isplay = false;
    clearInterval(timerInterval);
    minCounter = 0;
    secCounter = 0;
    centiCounter = 0;
    minute.textContent = min + " :";
    second.textContent = " " + sec + " :";
    centiSecond.textContent = " " + centiSec;
    playBtn.textContent = "Play";
    laps.innerHTML = "";
    lapId = 0;
}

function lapTimer(){
    if(isplay){
        const lapItem = document.createElement("li");
        lapItem.textContent = `Lap ${++lapId}: ${min}:${sec}.${centiSec}`;
        laps.appendChild(lapItem);
    }
}

function clearAllLaps() {
    laps.innerHTML = "";
    lapId = 0;
}

playBtn.addEventListener('click', startTimer);
resetBtn.addEventListener('click', resetTimer);
lapBtn.addEventListener('click', lapTimer);
clearAllBtn.addEventListener('click', clearAllLaps);
  