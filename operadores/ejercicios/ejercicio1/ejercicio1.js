/* 
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