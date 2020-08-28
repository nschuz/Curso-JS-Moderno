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
}]; //comprobra si un valor existe en un arreglo 

meses.forEach(function (mes) {
  if (mes === 'Enero') console.log("Enero si existe");
}); //otra forma 

var resultado = meses.includes('Enero');
console.log(resultado); //Includes no fucniona en unaregglo d eobjeto 
//some se usa en una rreglo de objetos

var existe = carrito.some(function (producto) {
  return producto.nombre === 'Celular';
});
console.log(existe); //En unarreglo tradiciona 

var existe2 = meses.some(function (mes) {
  return mes === 'Enero';
});
console.log(existe2);
//# sourceMappingURL=01-app.dev.js.map
