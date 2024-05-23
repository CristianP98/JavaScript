/*  
  Escribe un programa que muestre por consola (con un print) los
  números de 1 a 100 (ambos incluidos y con un salto de línea entre
  cada impresión), sustituyendo los siguientes:
  - Múltiplos de 3 por la palabra "fizz".
  - Múltiplos de 5 por la palabra "buzz".
  - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
*/

function imprimir (){
    for (let inicio = 1; inicio <= 100; inicio++){
        if (inicio % 3 == 0 && inicio % 5 == 0){
            console.log('fizzbuzz');
        }
         else if (inicio % 3 === 0){
            console.log('fizz');
         }
         else if (inicio % 5 === 0){
            console.log('buzz');
         }
    }
}

imprimir();