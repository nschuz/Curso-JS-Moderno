"use strict";

var producto = {
  nombre: "Monitor 20Pulgadas",
  precio: 30,
  disponinle: true,
  informacion: {
    medida: {
      peso: 20
    },
    fabricacion: {
      pais: 'China,'
    }
  }
}; //Destructiring en objetos anidados

var nombre = producto.nombre,
    informacion = producto.informacion,
    _producto$informacion = producto.informacion,
    fabricacion = _producto$informacion.fabricacion,
    pais = _producto$informacion.fabricacion.pais;
console.log(informacion);
console.log(fabricacion);
console.log(pais);
//# sourceMappingURL=06-app.dev.js.map
