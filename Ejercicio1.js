'use strict';

function Ejercicio1(miCadena, miBool, miArray, miFuncion)
{
    var producto = 1;

    if(typeof miCadena != 'string' || typeof miBool != 'boolean' || Array.isArray(miArray) == false || typeof miFuncion != 'function') console.log("Los datos introducidos no están en el formato correcto");
    if(miBool == true)
    {
        for(var num of miArray)
        {
            producto *= num;
        }

        if(producto >= 100)
        {
            if(miCadena.includes('a') || miCadena.includes('A')) console.log("La letra 'a' no esta permitida");
            else console.log("Muy bien, no has usado la letra 'a'.");
        }
        else console.log("El producto de los items en el array ("+ producto + ") es insuficiente para comprobar la cadena");
    }
    else alert("Se acabó el juego"); //Lo tuve que poner así porque a pesar de que typeOF miFuncion me dijese que miFuncion = 'function', al ponerlo en el navegador, me dice que no lo es.
}

Ejercicio1();
Ejercicio1("Hola mundo", true, [1, 2, 3, 4], () => {alert("Se acabó el juego")});
Ejercicio1("Sí", true, [10, 20, 30, 40], () => {alert("Se acabó el juego")});
Ejercicio1("Sí", false, [10, 20, 30, 40], () => {alert("Se acabó el juego")});


