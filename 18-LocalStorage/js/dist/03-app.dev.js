"use strict";

//Elimando elemntos de locla stroarge 
localStorage.removeItem('nombre'); //Actuk¿lizar un resgitro 

var meses = JSON.parse(localStorage.getItem('meses'));
meses.push('Nuevo meses');
localStorage.setItem('meses');
localStorage.clear();
//# sourceMappingURL=03-app.dev.js.map
