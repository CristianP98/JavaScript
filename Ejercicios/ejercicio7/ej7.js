/* 
En este script debes pedir al usuario un número de dos dígitos y debes devolver el número de unidades y de decenas, o sea, cada dígito del número. Usa solo operationes aritméticas

Recuerda si divides un número entre 10 el cociente entero es el número de decenas y el resto es el número de unidades

-----------------------
Si ese teclea el número 45

Unidades: 5

Decenas: 4

-----------------------

input: numero de dos digitos entre 10 y 99 ->entero
output: decenas, unidades -> enteros

ejemplo:

54
decenas -> 5 
unidades -> 4

*/


let num = Number.parseInt(prompt("Introduce unn número entre el 10 y el 99", 10));

let decenas = Number.parseInt( num / 10);

let unidades = Number.parseInt(num-decenas*10);

console.log("Decenas: " + decenas, "Unidades: " + unidades);


document.getElementById("clase").innerText = `El numero ${num} tiene ${decenas} decenas y ${unidades} unidades.`;
