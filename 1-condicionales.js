/**
 * 1 Condicionales [3 puntos]
 * 
 * Crear un programa que pida al usuario(prompt) que introduzca uno de los siguientes caracteres: + - x /
 * 
 * Si introduce '+' mostrar por consola 'sumar'
 * Si introduce '-' mostrar por consola 'restar'
 * Si introduce 'x' mostrar por consola 'multiplicar'
 * Si introduce '/' mostrar por consola 'dividir'
 * Si no introduce ninguno de los anteriores, mostrar :'no conozco esa operación'
 * 
 */

console.log('ejercicio 1') //no quitar este console.log, empezar debajo el ejercicio

let simbolo = window.prompt("Introduce uno de los siguientes simbolos (+, -, x, /):");

if (simbolo === '+') {
    console.log('sumar');
} else if (simbolo === '-') {
    console.log('restar');
} else if (simbolo === 'x') {
    console.log('multiplicar');
} else if (simbolo === '/') {
    console.log('dividir');
} else {
    console.log('no conozco esa operación');
}