"use strict";

//Modificar Textos o imagenes 
var encabezado = document.querySelector('.cotenido-hero h1');
console.log(encabezado);
console.log(encabezado.innerText); //se tare le texto , si en l css visiblily:hiden no lo va encontrar

console.log(encabezado.textContent); //se trae el texto , si lo encunetra visibilyti

console.log(encabezado.innerHTML); //se tare el texto y las etiqteas html

document.querySelector('.cotenido-hero h1').textContent = "NUevo heading";
var imagen = document.querySelector('.card img');
imagen.src = './../img/hacer2.jpg';
//# sourceMappingURL=06-scripts.dev.js.map
