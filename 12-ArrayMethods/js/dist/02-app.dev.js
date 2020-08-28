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
meses.forEach(function (mes, i) {
  console.log("".concat(i, "  ").concat(mes));

  if (mes == 'Abril') {
    console.log('Encontrado');
  }
}); //Econtrtar el indice de abril

var indice = meses.findIndex(function (meses) {
  return meses === 'Enero';
});
console.log(indice); //Encontrar un indice de un arreglo de objeto 

var indice2 = carrito.findIndex(function (producto) {
  return producto.precio === 100;
});
console.log(indice2);
//# sourceMappingURL=02-app.dev.js.map
