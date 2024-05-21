/* 
Crea una función que tenga dos argumentos: num1, num2, y que devuelva como resultado la suma de ambos números. Se supone que se usarán solo números válidos, no letras o símbolos.
*/

function suma(num1, num2){ 
    return num1 + num2;
}
suma( 3, 5);

console.log('El resultado de la suma es: ',suma( 3, 5));

/*
Esta función se va a llamar esPar(num) y deberá devolver verdadero si el argumento es par y falso si es impar. Se acepta que solo se usarán números válidos.
 */

const esPar = function(num){
    return (num % 2 == 0);
}
 let resultado = Number.parseInt(prompt('Ingrese un número: '));
 console.log(esPar(resultado));

 /* 
 Función que calcule si un número es múltiplo de otro. La función recibirá dos argumentos, el primero será el supuesto mutiplo del segundo argumento.
 */


 