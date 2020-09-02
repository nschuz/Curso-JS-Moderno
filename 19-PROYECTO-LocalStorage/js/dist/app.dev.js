"use strict";

// Variables 
var formulario = document.querySelector('#formulario');
var listaTweets = document.querySelector('#lista-tweets');
var btn = document.querySelector('#boton'); //Event Listeners 

cargarEventListeners();

function cargarEventListeners() {
  formulario.addEventListener('submit', agregaTweet);
} //Funciones


function agregaTweet(e) {
  e.preventDefault(); //console.log('Agregando Tweet');
  //Text area donde el ususario escribe 

  var twett = document.querySelector('#tweet').value;

  if (twett === '') {
    mostrarError('Un mensaje no puede ir vacio');
    return; //Evita que se eejecutan mas lienas de codifo
  }
} //MOstrar error


function mostrarError(mensaje) {
  var mensajeError = document.createElement('p');
  mensajeError.textContent = mensaje;
  mensajeError.classList.add('error'); //Insertarlo en contenido 

  var contenido = document.querySelector('#contenido');
  contenido.appendChild(mensajeError);

  if (document.querySelector('p')) {
    setTimeout(function () {
      btn.disabled = false;
    }, 3000);
    btn.disabled = true;
  } else {
    btn.disabled = false;
  }

  setTimeout(function () {
    mensajeError.remove();
  }, 3000);
}
//# sourceMappingURL=app.dev.js.map
