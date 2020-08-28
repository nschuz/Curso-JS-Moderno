"use strict";

//traversion del dom 
//Recorrer el doom 
var navegacion = document.querySelector('.navegacion');
console.log(navegacion);
console.log(navegacion.childNodes); //Los espacions en blacos son considerados en blanco 
//como los puentos en blanco 
//Es por esos tenemos una solucion children 

console.log(navegacion.children[1].nodeName);
console.log(navegacion.children[1].nodeType);
var card = document.querySelector('.card');
console.log(card.children[1].children[1].textContent);
card.children[1].children[1].textContent = 'Nuevo heading desde traversing the dom';
card.children[0].src = './../img/hacer3.jpg'; //aTraversing the hijo a padre 

console.log(card.parentElement);
console.log(card.parentElement.parentElement.parentElement); //Otra forma 

console.log(card.nextElementSibling); //NO lleva el elemnto hermano

var ultimoCard = document.querySelector('.card:nth-child(4)');
console.log(ultimoCard);
//# sourceMappingURL=08-scripts.dev.js.map
