/* 
Cambio de unidades. En este ejercicio debes convertir a segundos una medida de tiempo dada en horas y minutos.

Recuerda una hora son 60 minutos y cada minuto son 60 segundos.
----------------------
horas : 2

minutos 30

Resultado 2*60*60 + 30*60 = 9000 segundos
-----------------------
inputs: Hora y minutos
outputs: Segundos
*/

/* let horas = (2);
let minutos = (60);

let resultado = (horas*minutos*60) + 30*60;

console.log("El resultado es: " + resultado); */

// Respuesta de la clase
/* 
Ejemplo 1h 45min
1 * 3600 = 3600
45 * 60 = 2700
segundos = 6300 s
*/

let dato = prompt("Introduce las horas: ");
let horas = Number.parseInt(dato);
dato = prompt ('Introduce los minutos');
let minutos = Number.parseInt(dato);

console.log("h:m", horas, ": ", minutos);

// Conversion a segundos
let segundos = (horas * 3600 + minutos * 60);
console.log ("Segundos: ", segundos);

// Escribir en el documento

document.getElementById("clase-6").innerHTML = ("Los segundos serian: ") + horas + segundos;
