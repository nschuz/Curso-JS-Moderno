"use strict";

//Gnerar html desde js 
//Construyendo el nuevo enlce 
var enlace = document.createElement('a'); //agregando texto

enlace.textContent = 'Nuevo enlace'; //agregando href

enlace.href = '/nuevo-enlace'; //Seleccionamos la nevegacion 

var navegacion = document.querySelector('.navegacion');
navegacion.appendChild(enlace); //apend child lo coloca al final de los hijos

navegacion.insertBefore(enlace, navegacion.children[1]); //insertamos enlcae antes de navegacion.children[1]

enlace.setAttribute('data-enlace');
enlace.classList.add('alguna-clase'); //CRear un card de forma dinammica 

var parrafo1 = document.createElement('p');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria , concierto');
var parrafo2 = document.createElement('p');
parrafo2.textContent = 'Concierto de rock';
parrafo2.classList.add('titulo');
var parrafo3 = document.createElement('p');
parrafo3.textContent = '800 por precio';
parrafo3.classList.add('precio'); //Crear div con la clase info 

var info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo3);
info.appendChild(parrafo1);
info.appendChild(parrafo2); //Crear Imagens 

var Imagens = document.createElement('img');
Imagen.src = 'img/hacer.jpg';
console.log(imagen); //CRear el card 

var card = document.createElement('div');
card.classList.add('card');
card.appendChild(imagen); //asignar info 

card.appendChild(info); //insertra en el html 

var contenedor = document.querySelector('.hacer .contenedor-card');
contenedor.appendChild(card);
//# sourceMappingURL=10-scripts.dev.js.map
