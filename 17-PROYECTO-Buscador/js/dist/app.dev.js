"use strict";

//Variables
//contenedor para los resultados 
var resultado = document.querySelector('#resultado');
var marca = document.querySelector('#marca');
var minimo = document.querySelector('#minimo');
var maximo = document.querySelector('#maximo');
var puertas = document.querySelector('#puertas');
var transmision = document.querySelector('#transmision');
var year = document.querySelector('#year');
var color = document.querySelector('#color');
var min = 2010;
var max = new Date().getFullYear();
; //Genenrar un objeto con la busqueda

var datosBusqueda = {
  marca: '',
  year: '',
  transmision: '',
  color: '',
  puertas: '',
  minimo: '',
  maximo: ''
}; //Eventos

document.addEventListener('DOMContentLoaded', function () {
  mostrarAutos(autos); //muestra los automoviles al acargar 
  //llena las opciones de años

  llenaSelect();
}); //Events listener para los select de busqueda

marca.addEventListener('change', function (e) {
  datosBusqueda.marca = e.target.value;
  filtrarAuto();
});
year.addEventListener('change', function (e) {
  datosBusqueda.year = e.target.value;
  filtrarAuto();
});
transmision.addEventListener('change', function (e) {
  datosBusqueda.transmision = e.target.value;
  filtrarAuto();
});
color.addEventListener('change', function (e) {
  datosBusqueda.color = e.target.value;
  filtrarAuto();
});
puertas.addEventListener('change', function (e) {
  datosBusqueda.puertas = e.target.value;
});
minimo.addEventListener('change', function (e) {
  datosBusqueda.minimo = e.target.value;
  filtrarAuto();
});
maximo.addEventListener('change', function (e) {
  datosBusqueda.maximo = e.target.value;
  filtrarAuto();
}); //Funciones

function mostrarAutos(autos) {
  limpiarhtml(); //Elimina el html previo

  autos.forEach(function (auto) {
    var marca = auto.marca,
        modelo = auto.modelo,
        year = auto.year,
        transmision = auto.transmision,
        color = auto.color,
        precio = auto.precio,
        puertas = auto.puertas;
    var autoHtml = document.createElement('p');
    autoHtml.textContent = "\n        ".concat(marca, " ~ ").concat(modelo, " ~ ").concat(year, " ~ ").concat(puertas, " Puertas ~ Trasmision: ").concat(transmision, " ~ ").concat(color, " ~ ").concat(precio, "\n        "); //lo inyectamos en el html 

    resultado.appendChild(autoHtml);
  });
} //Limpiar  html 


function limpiarhtml() {
  while (resultado.firstChild) {
    resultado.removeChild(resultado.firstChild);
  }
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
  var resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarPrecio).filter(filtrarMaximo).filter(colorr).filter(puertass).filter(trans); //console.log(resultado);

  if (resultado.length) {
    mostrarAutos(resultado);
  } else {
    noResultado();
  }
}

function noResultado() {
  limpiarhtml();
  var noResultado = document.createElement('div');
  noResultado.classList.add('alerta', 'error');
  noResultado.textContent = "No hay resultado";
  resultado.appendChild(noResultado);
} //Esta es llmada funcion de alto nivel 


function filtrarMarca(auto) {
  var marca = datosBusqueda.marca;

  if (marca) {
    return auto.marca === marca;
  } else {
    return auto; //regresamos el auto completo 
  } //pero si el usuario no selecciona nda regresa el automovil compleot 

}

function filtrarYear(auto) {
  var year = datosBusqueda.year;

  if (year) {
    return auto.year === parseInt(year);
  } else {
    return auto; //regresamos el auto completo 
  } //pero si el usuario no selecciona nda regresa el automovil compleot 

}

function filtrarPrecio(auto) {
  var minimo = datosBusqueda.minimo;

  if (minimo) {
    return auto.precio >= minimo;
  } else {
    return auto; //regresamos el auto completo 
  } //pero si el usuari

}

function filtrarMaximo(auto) {
  var maximo = datosBusqueda.maximo;

  if (maximo) {
    return auto.precio <= maximo;
  } else {
    return auto; //regresamos el auto completo 
  } //pero si el usuari

}

function colorr(auto) {
  var color = datosBusqueda.color;

  if (color) {
    return auto.color === color;
  } else {
    return auto; //regresamos el auto completo 
  } //pero si el usuari

}

function puertass(auto) {
  var puertas = datosBusqueda.puertas;

  if (puertas) {
    return auto.puertas === puertas;
  } else {
    return auto; //regresamos el auto completo 
  } //pero si el usuari

}

function trans(auto) {
  var transmision = datosBusqueda.transmision;

  if (transmision) {
    return auto.transmision === transmision;
  } else {
    return auto; //regresamos el auto completo 
  } //pero si el usuari

}
//# sourceMappingURL=app.dev.js.map
