/* 
Un poco de interactividad. En este ejercicio debes escribir un programa que lea el nombre del usuario y salude con un "Hola" seguido del nombre del usuario.
Para leer el nombre usa un prompt con un texto indicativo como 
"Escribe tu nombre"

input: nombre (pepe)
outpust: mensaje (saludo)
*/
// Pedimos el nombre del usuario:
let nombre = prompt("Escribe aquí tu nombre");

let mensaje = ("Hola, " + nombre);

alert(mensaje);
