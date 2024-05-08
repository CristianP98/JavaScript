/* 
En una variable tienes el lado de un cuadrado, debes escribir un programa que te calcule el área y el perímetro del cuadrado.
El area la calculas como lado multiplicado por lado. El perímetro es la suma de los cuatro lados.
------
Lado 40

El area es 1600

El perímetro es 169
------------------------------

input: lado 
outputs: perimetro, area

ejemplo:

lado = 10
p= 40
A = 100
*/

let lado = 25;
// perimetro = 4 * lado

let P = 4 * lado; 
// Area = lado * lado

let A = lado * lado;

document.write ("El Perìmetro es: ", P, " u", "<br>"); 
document.write ("El Ángulo es: ", A, " u<sup>2</sup>");
