"use strict";

//Object Constructor 
function Producto(nombre, precio) {
  this.nombre = nombre;
  this.precio = precio;
  this.disponible = true;
} //Es  mas dinamico  pero se usa mas el object lietarla 
//Object literal 


var producto = {
  nombre: "Monitor 20Pulgadas",
  precio: 30,
  disponinle: true
};
var producto1 = new Producto("Monitor LG", 150);
var producto2 = new Producto("Monitor Apple", 150);
//# sourceMappingURL=12-app.dev.js.map
