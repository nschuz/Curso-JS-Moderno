"use strict";

function sumar(a, b) {
  return a + b;
}

var resultado = sumar(10, 20);
console.log(resultado); //Ejemplo  2

var total = 0;

function agregarCarrito(precio) {
  return total += precio;
}

function calcularImpuesto(total) {
  return total * 1.15;
}

total = agregarCarrito(300);
total = agregarCarrito(200);
total = agregarCarrito(100);
var totalPagar = calcularImpuesto(total);
console.log(total);
console.log('Total a pagar: ' + totalPagar);
//# sourceMappingURL=08-app.dev.js.map
