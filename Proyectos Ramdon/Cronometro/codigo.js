// Acttivacion del cronometro
let [milliseconds, seconds, minutes, hours] = [0,0,0,0];
let timerRef = document.querySelector('.timerDisplay');
let int = null;

// Ejecución del boton de inicio (start)
document.getElementById('startTimer').addEventListener('click', () => {
    if(int !==null){
        clearInterval(int);
    }
    int = setInterval(displayTimer,10);
});

// Implementación del boton de pausa (pause)
document.getElementById('pauseTimer').addEventListener('click', () => {
    clearInterval(int);
});

// Implementación del boton de reiniciar (reset)
document.getElementById('resetTimer').addEventListener('click',() =>{
    clearInterval(int);
    [milliseconds, seconds, minutes, hours] = [0,0,0,0];
    timerRef.innerHTML = '00:00:00:00';
})

// Funcion del cronometro