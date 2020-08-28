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
var total = 0;
carrito.forEach(function (producto) {
  return total += producto.precio;
});
console.log(total); //Con un reduce 
//NOta este si cambia su sintaxis // el cero significa que inicia desde cero 

var resultado = carrito.reduce(function (total, producto) {
  return total + producto.precio;
}, 0);
console.log(resultado);
//# sourceMappingURL=04-app.dev.js.map
