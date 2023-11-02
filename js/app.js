let nombre = document.getElementById('nombre');
let apellido = document.getElementById('apellido');
let mail = document.getElementById('mail');
let cantidad = document.getElementById('cantidad');
let categoria = document.getElementById('categoria');
let entrada = 200;

const expresionRegularNombre = "^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$";
const expresionRegularMail =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;




function validarNombre() {
        if (nombre.value==="") {
            nombre.classList.add("is-invalid");
            nombre.focus();
        }
        else  if (nombre.value.match(expresionRegularNombre) == null) {
            nombre.classList.add("is-invalid");
            nombre.focus();
        }
        else {
            nombre.classList.remove("is-invalid");
        }
    }

function validarApellido() {
    if (apellido.value==="") {
        apellido.classList.add("is-invalid");
        apellido.focus();
    }
    else if (nombre.value.match(expresionRegularNombre) == null) {
        apellido.classList.add("is-invalid");
        apellido.focus();
    }
    else {
        apellido.classList.remove("is-invalid");
    }
}

function validarMail() {
    if (mail.value==="") {
        mail.classList.add("is-invalid");
        mail.focus();
    }
    else if (mail.value.match(expresionRegularMail) == null) {
        mail.classList.add("is-invalid");
        mail.focus();
    }
    else {
        mail.classList.remove("is-invalid");
    };
}

function calcularTotal() {
 switch (categoria.value) {
    case '0': 
        resumenTotal = entrada * cantidad.value;
        document.getElementById('totalPagar').innerText = resumenTotal;
        break;
    case '1':
        resumenTotal = (entrada - (entrada * 0.8)) * cantidad.value;
        document.getElementById('totalPagar').innerText = resumenTotal;
        break;
    case '2':
        resumenTotal = (entrada - (entrada * 0.5) )* cantidad.value;
        document.getElementById('totalPagar').innerText = resumenTotal;
        break;
    case '3':
        resumenTotal = (entrada - (entrada * 0.15)) * cantidad.value;
        document.getElementById('totalPagar').innerText = resumenTotal;
        break;
 }   

}

function borrar() {
    document.getElementById('totalPagar').innerText = '';
    nombre.value = '';
    apellido.value = '';
    mail.value = '';
    cantidad.value = '';
    categoria.value = '';
}

function resumen() {

    validarNombre();
    validarApellido();
    validarMail();
    calcularTotal();

};

const BTNCLEAR = document.getElementById('btnClear');
const BTNCLICK = document.getElementById('btnResumen');

BTNCLICK.addEventListener('click',resumen);
BTNCLEAR.addEventListener('click',borrar);
