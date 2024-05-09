/* Una tortilla de patatas lleva 200 gramos de patatas por persona.
Por cada kilo de patatas se necesitan 5 huevos y 300 gramos de cebolla. 
Escribe un script que dado el número de comensales calcule las cantidades de ingredientes necesarias 

inputs: comensales
outputs: ingredientes -> gramosPatatas, gramosCebollas, huevos

2 comensales

2*200 gramos = 400 gramos de patatas

kgPatatas = gramosPatatas / 1000 -> float
huevos = kgPatatas * 5 -> int
0.4 * 5 = 2

gramosCebollas = 300 * kgPatatas
300 * 0.4 = 120 g

2 => 400, 2, 120
*/


let comensales = Number.parseInt(prompt("Introduce la cantidad de comensales: ", 1));

// constantes
const GRAMOS_PATATAS_POR_PERSONA = 200;
const HUEVOS_POR_KG_PATATA =  5; //Posible mejoraÑ: 7-9
const GRAMOS_CEBOLLA_TORTILLA = 300;
// --------------------------
let gramosPatatas = (GRAMOS_PATATAS_POR_PERSONA * comensales);
let kgPatatas = (gramosPatatas / 1000);
let huevos = (HUEVOS_POR_KG_PATATA * kgPatatas);

// Comprobamos los datos que estuvieran correctos
// console.log(gramosPatatas, kgPatatas, huevos);
// ------------------------
huevos = Math.ceil(huevos);
console.log(huevos);

let gramosCebolla = (GRAMOS_CEBOLLA_TORTILLA * kgPatatas);

console.log(gramosPatatas, huevos, gramosCebolla);

// Escribimos salida: 

let msg = `
<p>Para ${comensales} comensales se necesitan: </p>
<ul>
<li>${gramosPatatas} Gramos de patatas</li>
<li>${huevos} Huevos</li>
<li>${gramosCebolla} Gramos de cebolla</li>
<ul>
`

document.getElementById("ej-8").innerHTML = msg;
