"use strict";

//Cortatr espacios en blanco 
var producto = '             hola              ';
console.log(producto);
console.log(producto.length); //Elimnar espacio del inicio 

console.log(producto.trimStart()); //Eliminar es pacio del final

console.log(producto.trimEnd()); //Metodos encadenados 

console.log(producto.trimStart().trimEnd()); //La version antigua 

console.log(producto.trim());
//# sourceMappingURL=04-app.dev.js.map
