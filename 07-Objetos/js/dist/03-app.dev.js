"use strict";

//Agregando o elimando mas propiedades al objeto 
var producto = {
  nombre: "Monitor 20Pulgadas",
  precio: 30,
  disponinle: true
}; //Agregar nuevas propiedades del objeto 

producto.imagen = "Imagen.jpg"; //usa = porque ya esta fuera 
//Elimando una nueva propiedad

delete producto.disponinle;
console.log(producto);
//# sourceMappingURL=03-app.dev.js.map
