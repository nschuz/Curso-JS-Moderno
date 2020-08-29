"use strict";

var busqueda = document.querySelector('.busqueda');
busqueda.addEventListener('keyup', function () {
  console.log('Escribiendo.....');
});
busqueda.addEventListener('keydown', function () {
  console.log('Escribiendo.....');
});
busqueda.addEventListener('copy', function () {
  console.log('Escribiendo.....');
});
busqueda.addEventListener('cut', function () {
  console.log('Escribiendo.....');
});
busqueda.addEventListener('paste', function () {
  console.log('Escribiendo.....');
});
busqueda.addEventListener('input', function (e) {
  console.log(e.type); //sobre que elemneto estamos trabajando

  console.log(e.target.value); //lo que el usuario esta escribiendo
});
//# sourceMappingURL=03-scripts.dev.js.map
