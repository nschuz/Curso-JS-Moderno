"use strict";

//Elimando elemntos del DOm 
var primerEnlace = document.querySelector('a');
primerEnlcae.remove(); // elimnar en si el elemento 
//Eliminar desde el padre

var navegacion = document.querySelector('.navegacion');
console.log(navegacion.children);
navegacion.removeChild(navegacion.children[2]); //le pasamos la rferencia del elemnto que vamos eliminar
//# sourceMappingURL=09-scripts.dev.js.map
