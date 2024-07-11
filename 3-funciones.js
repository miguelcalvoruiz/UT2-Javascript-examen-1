/**
 * 3 Función [4puntos]
 * 
 * Función que recibe como parámetros dos números y la operación a realizar. 
 * [1pt] Si la operación es 'sumar', muestra por pantalla la suma de ambos
 * [1pt] Si la operación es 'restar', muestra la resta
 * [1pt] Si la operación no  es ninguna de las dos, mostrar 'operación desconocida'
 * [1pt] Hacer que el parámetro de la operación sea siempre 'sumar' por defecto (en caso de que no se especifique)
 * 
 */

console.log('ejercicio 3') //no quitar este console.log, empezar debajo el ejercicio


function sumaOResta(num1, num2, op = 'sumar') {
    if (op === "restar") {
        let resultado = num1 - num2;
        console.log("El resultado de la resta " + num1 + "-" + num2 + "= " + resultado);
    } else if (op === "sumar") {
        let resultado = num1 + num2;
        console.log("El resultado de la suma " + num1 + "+" + num2 + "= " + resultado);
    } else {
        console.log("operación desconocida");
    }
}


console.log("Test 2 paramtros");
sumaOResta(2,2);

console.log("Test operacion invalida");
sumaOResta(2,2, 'multiplicacion');

console.log("Test suma");
sumaOResta(2,2, 'sumar');

console.log("Test resta");
sumaOResta(2,2, 'restar');

