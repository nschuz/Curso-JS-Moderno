"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var carrito = [];
var producto = {
  nombre: "Monitor 32pulgadas",
  precio: 400
};
var producto2 = {
  nombre: "Monitor 32pulgadas",
  precio: 400
};
var producto3 = {
  nombre: "Monitor 32pulgadas",
  precio: 400
}; // exite otra agegar funciones declarativas la que no modicfica la varibale original 

var resultado;
resultado = [].concat(carrito, [producto]);
resultado = [].concat(_toConsumableArray(resultado), [producto2]);
console.log(resultado);
//# sourceMappingURL=07-app.dev.js.map
