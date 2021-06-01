// contenedores de mensajes de error
const formulario = document.getElementsByTagName('form')[0];
const errores = document.getElementById('errores');
const usuario_error = document.getElementById('usuario_error')
const contraseña_error = document.getElementById('contraseña_error')
const correo_error = document.getElementById('correo_error')
const nombre_error = document.getElementById('nombre_error')
const apellidos_error = document.getElementById('apellidos_error')
const telefono_error = document.getElementById('telefono_error')

// mensajes de error
const usuario_valueMissingError = 'Tienes que introducir un nombre de usuario válido.';
const usuario_patternMismatchError = 'El usuario tiene que empezar por una letra mayúscula y terminar con un número.';
const usuario_tooShortError = '';
const contraseña_valueMissingError = 'Tienes que introducir una contraseña válida.';
const contraseña_patternMismatchError = 'La contraseña tiene que empezar por un número y terminar por una letra mayúscula.';
const contraseña_tooShortError = 'La contraseña tiene que tener 8 caracteres.';
const repita_contraseña_valueMissingError = 'Tienes que confirmar la contraseñas.';
const repita_contraseña_patternMismatchError = 'La contraseña tiene que empezar por un número y terminar por una letra mayúscula.';
const repita_contraseña_tooShortError = 'La contraseña tiene que tener 8 caracteres.';
const correo_valueMissingError = 'Tienes que introducir una dirección de correo electrónico válida.';
const correo_patternMismatchError = '';
const correo_tooShortError = '';
const nombre_valueMissingError = 'Tienes que introducir un nombre válido.';
const nombre_patternMismatchError = 'El nombre tiene que comenzar por mayúsculas.';
const nombre_tooShortError = '';
const apellidos_valueMissingError = 'Tienes que introducir un apellido válido.';
const apellidos_patternMismatchError = 'Los apellidos tiene que comenzar por mayúsculas.';
const apellidos_tooShortError = '';
const edad_valueMissingError = '';
const edad_patternMismatchError = 'La edad tiene que ser un número.';
const edad_tooShortError = '';
const telefono_valueMissingError = 'Tienes que introducir un número de teléfono válido.';
const telefono_patternMismatchError = 'El número de teléfono tiene que empezar por 6, 7 o 9 (9 cifras).';
const telefono_tooShortError = 'La contraseña tiene que tener 8 caracteres.';

const inputs = document.getElementsByTagName('input');

for (let input of inputs) {
    input.addEventListener('input', function () { // añadir event listeners para escritura en input
        let input_error = eval(`${input.id}_error`);
        if (input.validity.valid) {
            input_error.innerHTML = '';
            input_error.className = 'error';
        } else
            MuestraError(input, input_error);
    });
}

formulario.addEventListener('submit', function (event) { // añadir event listener del submit del formulario
    for (let input of inputs) {
        if (!input.validity.valid) {
            let input_error = eval(`${input.id}_error`);
            MuestraError(input, input_error);
            event.preventDefault();
        }
    } if (!CoincideContraseña())
        event.preventDefault();
});

function MuestraError(input, input_error) { // modificar mensajes de error
    let input_valueMissingError = eval(`${input.id}_valueMissingError`)
    let input_patternMismatchError = eval(`${input.id}_patternMismatchError`)
    let input_tooShortError = eval(`${input.id}_tooShortError`)

    if (!input.validity.valid) {
        if (input.validity.valueMissing) {
            input_error.textContent = input_valueMissingError;
        } else if (input.validity.patternMismatch) {
            input_error.textContent = input_patternMismatchError;
        } else if (input.validity.tooShort) {
            input_error.textContent = input_tooShortError;
        }
        input_error.className = 'error active';
    }
}

function CoincideContraseña() { //comprobar si las contraseñas coinciden
    let coinciden = true;
    var pw1 = document.getElementById("contraseña");
    var pw2 = document.getElementById("repita_contraseña");
    if (pw1.value != pw2.value) {
        repita_contraseña_error.textContent = 'Las contraseñas no coinciden';
        coinciden = false;
        repita_contraseña_error.className = 'error active';
    }
    return coinciden;
}
