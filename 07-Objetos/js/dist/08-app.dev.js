"use strict"; //exige que cumplas ciertas reglas 

var producto = {
  nombre: "Monitor 20Pulgadas",
  precio: 30,
  disponinle: true
};
Object.freeze(producto); //estac¿congelado 
//evita borar e insertar propiedades
//No podemos modificarlo

console.log(Object.isFrozen(producto));
//# sourceMappingURL=08-app.dev.js.map
