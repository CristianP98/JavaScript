/* 
Tienes que escribir un programa que intercambie el valor de dos variables. 
Al final la primera variable debe terner el valor de la segunda y la segunda el valor de la primera.
No vale usar arrays ni asignación múltiple
-------------------

Ejemplo: 

var1 = 1
var2 = 2
....

var1 = 2
var2= 1
---------------------------
solucion con dos variables de swap (Intercambiar)
*/

let var1 = 1;
let var2 = 2;
console.log(var1, var2);
let var1_2 = var2;
let var2_1 = var1;
var1 = var1_2;
var2 = var2_1;
console.log (var1_2, var2_1);


// Solucion con una variable temporal 

let var3 = 3;
let var4 = 4;
console.log(var3, var4);
let temp = var4;
var4 = var3;
var3 = temp;
console.log (var3, var4);