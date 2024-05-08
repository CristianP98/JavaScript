/* 
En este ejercicio vas a pedir al usuario que teclee tres números enteros y el script mostrará como resultado el valor medio de los tres.
Recuerda que la media de tres números se calcula sumando los tres y dividiendo entre 3.

inputs: Numero (1,2,3) // enteros
outpust: media entre 3 (promedios) // floats

ejemplos: 

inputs: 10, 20, 30
outputs: 60/3 = 20
*/

// Pedimos los tres números (Se pone el Number para que los datos sean numericos)
let num1 = Number(prompt("Escribe el primer número"));
let num2 = Number(prompt("Escribe el segundo número"));
let num3 = Number(prompt("Escribe el tercer número"));

// promedio
let promedio = (num1 + num2 + num3) / 3;

document.write ("El promedio es: " + promedio);