'use strict';
var arrayNumerico = [];
var num;
var iteracion = 0;

do{
    num = prompt("Escribe un número");
    arrayNumerico[iteracion] = num;
    iteracion++;
}while(isNaN(num) == false);

let arrayCopia = arrayNumerico.filter(number => (number % 3) == 0);

console.log(arrayNumerico);
console.log(arrayCopia.sort());


