/* Operaciones simples 
-------------------
Calcula el resultado de las expresiones:
Este apartado tiene operaciones numéricas que hay que calcular. Dependiendo de las prioridades o el orden de las operaciones el resultado puede variar.
*/

/* 

Operaciones combinadas: 10 + 5 * 2 y (10 + 5) * 2 y 10 + (5 * 2) -> ¿qué observas?
*/

let a = 10;
let b = 5;
let c = 2;
let total = (a + b * c);

document.getElementById("total-1").innerHTML= `º El resultado de la operación 10 + 5 * 2 es: ${total}`;

let total2 = ((a + b)* c);
document.getElementById("total-2").innerHTML= `º El resultado de la operación (10 + 5) * 2 es: ${total2}`;

let total3 = (a + (b * c));
document.getElementById("total-3").innerHTML= `º El resultado de la operación  10 + (5 * 2) es: ${total3}`;

/* 
Calcular el radio
-------------------
Área del círculo: 3.14 * r ** 2, con r igual a 10 -> ¿cómo podemos hacer un programa que reciba el radio r como dato y devuelva el área de la circunferencia?
*/
// respuesta del ejercicio 2
let PI = 3.14 * 100;
let radio = Number.parseInt(prompt('Introduce el numero de radio'));
let circunferencia = (PI * radio ** 2);
// Respuesta en pantalla
document.getElementById("total-4").innerHTML= `La circunferencia del número dado es: ${circunferencia}`;


/* Elevaciones
------------------
Notación científica: 10 elevado a 3 y 10 elevado a -3 -> ¿qué observas?
*/
let elevacion = 10;
let totalElevacion = 10 ** 3;
let totalElevacion2 = 10 ** -3;
document.getElementById("elevacion").innerHTML= `El 10 elevado a 3 es: ${totalElevacion} y elevado a -3 es: ${totalElevacion2}`;

/* 
Calcular Area
------------------
Área del triángulo: Encuentra el área de un triángulo con base 6 y altura 4. -> ¿Cómo harías una calculadora de áreas de triángulos?
*/

let altura = Number.parseInt(prompt('Ingrese el numero de la altura'));
let base = Number.parseInt(prompt('Ingrese el numero de la base'));
let totalTriangulo = (base * altura / 2);
document.getElementById("areaDeTriangulos").innerHTML = `El area del triangulo es: ${totalTriangulo}`;


/* 
Resultado de la operacion 25 / (5 - 5)
-----------------

*/

let operacion = 25 / (5 - 5) + 10;
console.log(operacion);
// El resultado es infinito (la operación no se puede hacer porque no se puede dividir por 0) y la solucion seria: 

let operacion2 = (25 / 5 - 5) + 10;
console.log(operacion2);

/* Perímetro de un cuadrado
------------------------
 Encuentra el perímetro de un cuadrado con un lado de longitud 8. ¿Cómo harías una calculadora para este dato a partir del lado? ¿Y el área?
*/

let longitud    = Number.parseInt(prompt('Introduzca la longitud'));
let totalLongitud   = (longitud * 4);
let totalArea   = (longitud * longitud);
let perimetro   = (longitud / 4); 
console.log(totalArea, totalLongitud, perimetro);


let valor1 = 5 + 10 * 2;
console.log(valor1);

