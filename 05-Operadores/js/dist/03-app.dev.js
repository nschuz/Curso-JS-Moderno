"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

//null y undefined 
//esistend diferentes de tipos de datos primitivos 
var nume; //undefined

console.log(nume);
console.log(_typeof(nume)); //null ecmaescrip dice que null es objeto 

var numero = null;
console.log(numero);
console.log(_typeof(numero));
console.log(numero == nume); //true

console.log(numero === nume); //false
//# sourceMappingURL=03-app.dev.js.map
