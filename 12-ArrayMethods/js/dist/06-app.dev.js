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
}]; //Con forEach

var resultado = " ";
carrito.forEach(function (producto, index) {
  if (producto.nombre == 'Tablet') {
    resultado = carrito[index];
  }
});
console.log(resultado); //Con .find

var resultado2 = carrito.find(function (producto) {
  return producto.nombre === 'Tablet';
});
console.log(resultado2); //solo regresa el primero que encuentra si qquiero tare todos usamos filter
//# sourceMappingURL=06-app.dev.js.map
