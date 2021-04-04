'use strict';

function VerAsignaturas(...alumno)
{   
    if(arguments.length > 0)
    {
        for(let i = 0; i < arguments.length; i++)
        {
            const [nombre, curso, ...resto] = alumno[i];
            console.log(nombre + "-" + curso + "-" + "Asignaturas: " + " " + resto);
        }
    }
    else console.log("No hay datos para mostrar");

}

VerAsignaturas(["Sara", "DAMA", "PROGRAMACION", "ED"], ["Martin", "DAMB", "PROGRAMACION", "LM", "ED", "BBDD", "SI"], ["Emma", "ASIR", "ISO", "BBDD", "LM"]);
VerAsignaturas(["Alvaro", "SEMI", "BBDD"]);
VerAsignaturas();