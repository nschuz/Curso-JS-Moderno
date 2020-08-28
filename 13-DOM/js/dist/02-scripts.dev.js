"use strict";

//seleciconar elemntos por su clase , getElementByClassName
var header = document.getElementsByClassName('header');
console.log(header);
var hero = document.getElementsByClassName('hero');
console.log(hero); //si las clases existen mas de 1 vez

var contenedores = document.getElementsByClassName('contenedor');
console.log(contedores); //regresa los elementos si en una o varios  
//si una clase no existe 

var noexiste = document.getElementsByClassName('no-existe');
console.log(noexiste); //Nos va regresa un html colection vacio  es como un arrgelo
//# sourceMappingURL=02-scripts.dev.js.map
