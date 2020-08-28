"use strict";

//arrowfunction en forMap y forEach
//FOR eACH
var numeros = [10, 20, 30, 50, 50, 60];
var carrito = [{
  nombre: "chuz",
  precio: 500
}, {
  nombre: "chuz1",
  precio: 500
}, {
  nombre: "chuz3",
  precio: 500
}, {
  nombre: "chuz4",
  precio: 500
}, {
  nombre: "chuz6",
  precio: 500
}, {
  nombre: "chuz7",
  precio: 500
}, {
  nombre: "chuz8",
  precio: 500
}]; //La diefrencia es que map te crea un arreglo nuevo

var arreglo = carrito.forEach(function (producto) {
  return console.log("".concat(producto.nombre));
});
var arreglonuevo = carrito.map(function (producto) {
  return console.log("".concat(producto.nombre));
});
console.log(arreglo);
console.log(arreglonuevo);
//# sourceMappingURL=12-app.dev.js.map
