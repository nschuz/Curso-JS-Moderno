//Sellar el objeto
"use strict" 
//exige que cumplas ciertas reglas 
const producto={

    nombre: "Monitor 20Pulgadas",
    precio: 30,
    disponinle: true,

}
Object.seal(producto);
//Con seal no se pueden añadir o borar las propiedades 
//pero si se pueden modificar las existentes 

console.log(Object.isSealed(producto));