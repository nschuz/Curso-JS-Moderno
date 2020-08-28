"use strict";

//querySelector
var card = document.querySelector('card');
console.log(card); //POdemos tener selectores especifio como en css

var info = document.info('.premium .info');
console.log(info); //Sleccionar el segundo card de hospedaje 

var segundoCrad = document.querySelector('section.hospedaje .card:nth-child(2)');
console.log(segundoCard); //Igualmente permite seleccionar id 

var formulario = document.querySelector('#formulario');
console.log(formulario); //Seleccionar elemntos por html 

var navegacion = document.querySelector('nav');
console.log(navegacion); //NOTA IMPORTANTE querySelector nos va retornar maximo un elemnto o ninguno si es que no lo encuentra
//# sourceMappingURL=04-scripts.dev.js.map
