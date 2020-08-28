"use strict";

//Foreach 
var pendientes = ['Tareas', 'Comer', 'Estudiar']; //Diseñado para recorrer arreglo

pendientes.forEach(function (pendiente, i) {
  console.log("".concat(i, " pendiente"));
}); //map te cera un arreglo nuevo 

var arregloNuevo = pendientes.map(function (pendiente, i) {
  console.log("".concat(i, " pendiente"));
});
console.log("-------------");
//# sourceMappingURL=06-app.dev.js.map
