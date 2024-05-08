/* 
En este ejercicio vas a pedir al usuario que teclee tres números enteros y el script mostrará como resultado el valor medio de los tres.
Recuerda que la media de tres números se calcula sumando los tres y dividiendo entre 3.

input: Numero (1,2,3)
outpust: media entre 3
*/

let num1 = prompt("Escribe el primer número", 0);
let num2 = prompt("Escribe el segundo número", 0);
let num3 = prompt("Escribe el tercer número", 0);

let total = (num1 + num2 + num3)/3;

alert("El valor total es: " + total);