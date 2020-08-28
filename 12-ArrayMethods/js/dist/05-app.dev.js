"use strict";

var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
var carrito = [{
  nombre: 'Monitor 27 Pulgadas',
  precio: 500
}, {
  nombre: 'Televisión',
  precio: 100
}, {
  nombre: 'Tablet',
  precio: 200
}, {
  nombre: 'Audifonos',
  precio: 300
}, {
  nombre: 'Teclado',
  precio: 400
}, {
  nombre: 'Celular',
  precio: 700
}];
var resultado;
resultado = carrito.filter(function (producto) {
  return producto.precio > 400;
});
resultado = carrito.filter(function (producto) {
  return producto.precio < 600;
});
resultado = carrito.filter(function (producto) {
  return producto.nombre != 'Audifonos';
});
console.log(resultado);
//# sourceMappingURL=05-app.dev.js.map
