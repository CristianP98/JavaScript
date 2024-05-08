/* 
Escribe un programa que solicite al usuario ingresar el número de kilómetros recorridos por su coche y el número de litros consumidos . El script debe mostrar el consumo de combustible por kilómetro.

Un problema matemático muy simple numero de litros dividido por número de kilómetros.

------------------
El usuario teclea

Num de litros: 20

Num de kilómetros: 80

Has consumido 0.25 l/km  //   20/80
-------------------
inputs: Km, Litros
outputs: consumo en L / Km

*/

// Pedimos los datos
let km = Number(prompt("Introduce los kilometros recorridos"));
let litros = Number(prompt("Introduce los litros gastados"));

// Calculamos el consumo

let consumo = litros / km; 
alert("El consumo es de: " + consumo) / km;
