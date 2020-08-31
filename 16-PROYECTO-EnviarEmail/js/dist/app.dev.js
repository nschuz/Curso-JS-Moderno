"use strict";

//Variables 
var btnEnviar = document.querySelector('#enviar');
var formulario = document.querySelector('#enviar-mail');
var btnReset = document.querySelector('#resetBtn');
var regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i; //Variables para campos 

var email = document.querySelector('#email');
var asunto = document.querySelector('#asunto');
var mensaje = document.querySelector('#mensaje');
cargarEventListeners();

function cargarEventListeners() {
  //Cuando la app arranca
  document.addEventListener('DOMContentLoaded', iniciarApp); //Campos del formulario 

  email.addEventListener('blur', validarFormulario);
  asunto.addEventListener('blur', validarFormulario);
  mensaje.addEventListener('blur', validarFormulario); //recorndamos un blur cuando selccionao y campo y me salgo
  //reinibia formulario 

  btnReset.addEventListener('click', ressetear); //enviar email 

  btnEnviar.addEventListener('click', envia);
} //Funciones 


function iniciarApp() {
  console.log('IniciarApp');
  btnEnviar.disabled;
  btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
  btnEnviar.addEventListener('click', function (e) {
    e.preventDefault();
  });
} // Valida el formulario 


function validarFormulario(e) {
  //console.log('validando');
  if (e.target.value.length > 0) {
    //Elimina eerroes
    var erroes = document.querySelector('p.error');

    if (erroes !== null) {
      erroes.remove();
    } //si hay algo


    e.target.classList.remove('border', 'border-red-500');
    e.target.classList.add('border', 'border-green-500');
  } else {
    //e.target.style.borderBottomColor='red';
    //console.log("No hay nada");
    e.target.classList.remove('border', 'border-green-500');
    e.target.classList.add('border', 'border-red-500');
    mostrarError('Todos los campos son obligatorios ');
  }

  if (e.target.type === 'email') {
    //const resultado =e.target.value.indexOf('@');
    if (regex.test(e.target.value)) {
      console.log('Email valido'); //si hay algo

      e.target.classList.remove('border', 'border-red-500');
      e.target.classList.add('border', 'border-green-500');

      var _erroes = document.querySelector('p.error');

      if (_erroes !== null) {
        _erroes.remove();
      }
    } else {
      console.log('Email no valido');
      e.target.classList.remove('border', 'border-green-500');
      e.target.classList.add('border', 'border-red-500');
      mostrarError('Email no es valido');
    }
  } //porque e.target.value hace referenci al campo atctaual
  //miestra quue esta hace referencias  hace referencia al email , asusntp


  if (regex.test(email.value) && asunto.value !== "" && mensaje !== "") {
    btnEnviar.disabled = false;
    btnEnviar.classList.remove('cursor-not-allowed', 'opacity-50');
  }
}

function mostrarError(mensaje) {
  var mensajeError = document.createElement('p');
  mensajeError.textContent = mensaje;
  mensajeError.classList.add('border', 'border-red-500', 'background-color-100', 'text-red-500', 'p-3', 'error');
  var errores = document.querySelectorAll('.error'); //querySlector alll podemos usar lenght 

  if (errores.length === 0) {
    formulario.insertBefore(mensajeError, document.querySelector('.mb-10'));
  }
} //Enviar email 


function envia(e) {
  e.preventDefault();
  console.log("holaaaaa"); //MOstarar el spne 

  var spinner = document.querySelector('#spinner');
  spinner.style.display = 'flex';
  setTimeout(function () {
    spinner.style.display = 'none';
    var parrafo = document.createElement('p');
    parrafo.textContent = 'Mensaje envidado';
    parrafo.classList.add('text-center', 'my-10', 'p-2', 'bg-green-500', 'text-white');
    formulario.insertBefore(parrafo, spinner);
    setTimeout(function () {
      parrafo.remove();
      ressetear();
    }, 3000);
  }, 3000);
} //reseta formulario 


function ressetear() {
  formulario.reset();
  iniciarApp();
}
//# sourceMappingURL=app.dev.js.map
