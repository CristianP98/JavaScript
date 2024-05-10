/* 
Has hecho una compra y sabes el precio del producto y su iva. Haz un script que te calcule el precio total que vas a pagar por tu compra. 
Te recuerdo que para calcular el total debes sumar al precio el resultado de multiplicasr precio por el iva y dividir por 100.
-------
Precio 200€

Iva: 21%

El total son 242 €.  //200 + 21*200/100

----- EJEMPLO DE CLASE ---

input (entrada) 100,21
output (salida) 121


input (entrada) 200,21
output (salida) 242
*/

// Caso 1
let precio = 100;  // euros
let iva = 21; //porcentaje
let impuesto = (iva / 100) * precio; // 21 euros
let total = precio + impuesto;

console.log (total);

// Finalmente, escribimos el resultado en el id: ej-1-1

document.getElementById("ej-1-1").innerHTML= (total);

//Caso 2
precio = 200;
impuesto = ( iva / 100 ) * precio; // 42 €
total = precio + impuesto;
console.log(precio, iva, "total:", total)
// Finalmente, escribimos el resultado en el id: ej-1-2
document.getElementById("ej-1-2").innerText = total;


