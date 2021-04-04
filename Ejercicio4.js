'use strict';

function IntroducirDatos()
{
    let nombre = prompt("Introduce el nombre del trabajador");
    let horasTrabajadas = prompt("Introduce las horas trabajadas por " + nombre);
    let sueldoHora = prompt("Introduce el sueldo por hora");

    return [nombre, horasTrabajadas, sueldoHora];
}

function Trabajador()
{   
    var [nombre, horasTrabajadas, sueldoHora] = IntroducirDatos();
    var salarioBruto = horasTrabajadas * sueldoHora;
    var impuestoHacienda = (salarioBruto * 20) / 100;
    var impuestoSeguridadSocial = (salarioBruto * 8) / 100;

    console.log("Nombre: " + nombre);
    console.log("Salario bruto: " + salarioBruto);
    console.log("Retencion Hacienda: " + impuestoHacienda);
    console.log("Retencion Seguridad Social: " + impuestoSeguridadSocial);
    console.log("Salario Neto: " + (salarioBruto - impuestoHacienda - impuestoSeguridadSocial));
}

Trabajador();