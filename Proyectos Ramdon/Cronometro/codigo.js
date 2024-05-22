// Acttivacion del cronometro
let [milliseconds, seconds, minutes, hours] = [0,0,0,0];
let timerRef = document.querySelector('.timerDisplay');
let int = null;

// Ejecución del boton de inicio (start)
document.getElementById('startTimer').addEventListener('click', ()=>{
    if(int!==null){
        clearInterval(int);
    }
    int = setInterval(displayTimer,10);
});

// Implementación del boton de pausa (pause)
document.getElementById('pauseTimer').addEventListener('click', ()=>{
    clearInterval(int);
});

// Implementación del boton de reiniciar (reset)
document.getElementById('resetTimer').addEventListener('click', ()=>{
    clearInterval(int);
    [milliseconds,seconds,minutes,hours] = [0,0,0,0];
    timerRef.innerHTML = '00 : 00 : 00 : 000 ';
});

// Funcion del cronometro

function displayTimer(){
    milliseconds+=10;

    if(milliseconds == 1000){
        milliseconds = 0;
        seconds++;

        if(seconds == 60){
            seconds = 0;
            minutes++;

            if(minutes == 60){
                minutes = 0;
                hours++;
            }
        }
    }
}

/* agregué un cero al caso de una cantidad de veces. Cuando el valor del tiempo de cuenta atrás es menor que diez, sumamos un cero. */

let h = hours < 10 ? "0" + hours : hours;
let m = minutes < 10 ? "0" + minutes : minutes;
let s = seconds < 10 ? "0" + seconds : seconds;
let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

// ordenar infomración en pantalla

timerRef.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;