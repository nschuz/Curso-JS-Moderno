"use strict";

//Replace , Slice , Subtring 
//remplzar
var producto = 'Monitor 20 pulgadas';
console.log(producto);
console.log(producto.replace('pulgadas', '"')); //Slice  para cortra 

console.log(producto.slice(0, 10));
console.log(producto.slice(8)); // del 8 hasta al final

console.log(producto.slice(2, 1)); //No va hacer nada 
//Alternativa a sclide 

console.log(producto.substring(0, 10));
console.log(producto.substring(2, 1)); //es mas  inteligente si lo modifica lo intercambia 

var usuario = "Chuz";
console.log(usuario.charAt(0));
//# sourceMappingURL=05-app.dev.js.map
