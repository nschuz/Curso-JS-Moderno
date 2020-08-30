"use strict";

// Evitar la propagación con contenido creado...
var parrafo1 = document.createElement('P');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria');
parrafo1.classList.add('concierto'); // Segundo parrafo

var parrafo2 = document.createElement('P');
parrafo2.textContent = 'Concierto de Rock';
parrafo2.classList.add('titulo'); // 3er parrafo...

var parrafo3 = document.createElement('p');
parrafo3.textContent = '$800 por persona';
parrafo3.classList.add('precio');

parrafo3.onclick = function () {
  nuevafuncion(1);
}; // crear el div...


var info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3); // Vamos a crear la imagen

var imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg'; // Crear el Card..

var contenedorCard = document.createElement('div');
contenedorCard.classList.add('contenedorCard'); // Vamos a asignar la imagen al card...

contenedorCard.appendChild(imagen); // y el info

contenedorCard.appendChild(info); // Insertarlo en el HTML...

var contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.appendChild(contenedorCard); // al inicio info

function nuevafuncion(id) {}
//# sourceMappingURL=08-scripts.dev.js.map
