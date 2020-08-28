"use strict";

var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
var meses2 = ['Agosto', 'Septiembre'];
var meses3 = ['Agosto', 'Septiembre ', 'Diciembre']; //.concat 

var resultados = meses.concat(meses2, meses3);
console.log(resultados); //spread operator 

var resultado2 = [].concat(meses, meses2, meses3, ['Otro meses']);
console.log(resultado2);
//# sourceMappingURL=07-app.dev.js.map
