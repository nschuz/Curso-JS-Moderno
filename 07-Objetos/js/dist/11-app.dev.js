"use strict";

var producto = {
  nombre: "Monitor 20Pulgadas",
  precio: 30,
  disponinle: true,
  mostrarInfo: function mostrarInfo() {
    console.log("El produto tiene un precio de ".concat(this.precio));
  }
}; //la palbra this hace regrencia a las lvalores o propiedades dentro de ese mismo objeto 

producto.mostrarInfo();
//# sourceMappingURL=11-app.dev.js.map
