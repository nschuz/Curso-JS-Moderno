"use strict";

//Variables
//contenedor para los resultados 
var resultado = document.querySelector('#resultado');
var marca = document.querySelector('#marca');
var minimo = document.querySelector('#minimo');
var maximo = document.querySelector('#maximo');
var puertas = document.querySelector('#puertas');
var trasmision = document.querySelector('#transmision');
var year = document.querySelector('#year');
var color = document.querySelector('#color');
var min = 2010;
var max = new Date().getFullYear();
; //Genenrar un objeto con la busqueda

var datosBusqueda = {
  marca: '',
  year: '',
  trasmision: '',
  color: '',
  puertas: '',
  minimo: '',
  maximo: ''
}; //Eventos

document.addEventListener('DOMContentLoaded', function () {
  mostrarAutos(); //muestra los automoviles al acargar 
  //llena las opciones de años

  llenaSelect();
}); //Events listener para los select de busqueda

marca.addEventListener('change', function (e) {
  datosBusqueda.marca = e.targe.value;
  filtrarAuto();
});
year.addEventListener('change', function (e) {
  datosBusqueda.year = e.targe.value;
});
trasmision.addEventListener('change', function (e) {
  datosBusqueda.trasmision = e.targe.value;
});
color.addEventListener('change', function (e) {
  datosBusqueda.color = e.targe.value;
});
puertas.addEventListener('change', function (e) {
  datosBusqueda.puertas = e.targe.value;
});
minimo.addEventListener('change', function (e) {
  datosBusqueda.minimo = e.targe.value;
});
maximo.addEventListener('change', function (e) {
  datosBusqueda.maximo = e.targe.value;
}); //Funciones

function mostrarAutos() {
  autos.forEach(function (auto) {
    var marca = auto.marca,
        modelo = auto.modelo,
        year = auto.year,
        trasmision = auto.trasmision,
        color = auto.color,
        precio = auto.precio,
        puertas = auto.puertas;
    var autoHtml = document.createElement('p');
    autoHtml.textContent = "\n        ".concat(marca, " ~ ").concat(modelo, " ~ ").concat(year, " ~ ").concat(puertas, " Puertas ~ Trasmision: ").concat(trasmision, " ~ ").concat(color, " ~ ").concat(precio, "\n        "); //lo inyectamos en el html 

    resultado.appendChild(autoHtml);
  });
} //Gnera los años del select 


function llenaSelect() {
  for (var i = max; i >= min; i--) {
    var opcion = document.createElement('option');
    opcion.value = i;
    opcion.textContent = i;
    year.appendChild(opcion); //agrega la opciones del año al slect
  }
} // funcion que filtra en base de la busqueda 


function filtrarAuto() {
  //usualmnete es unarrowfunctio 
  //en este caso es una funcion de alto nivel 
  var resultado = auto.filter(filtrarMarca);
} //Esta es llmada funcion de alto nivel 


function filtrarMarca(auto) {
  var marca = datosBusqueda.marca.marca;

  if (marca) {
    return auto.marca === datosBusqueda.marca;
  } else {
    return auto; //regresamos el auto completo 
  } //pero si el usuario no selecciona nda regresa el automovil compleot 

}
//# sourceMappingURL=app.dev.js.map
