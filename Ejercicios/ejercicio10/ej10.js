/* 
Escribe un script  que dado un número nos devuelva true si es un número par y false si es un número impar.
No usar condiconales.

Ejemplo: 
numero: 50

¿Es par? : true

*/

// El usuario ponga el numero
let numero = Number.parseInt(prompt("Ingrese un número"));

// operacion
let resto = (numero %2);
let numPar = (resto == 0);
console.log("El numero par es: " + numPar);

document.getElementById("clase").innerText = `El numero ${numero} es ${numPar};
