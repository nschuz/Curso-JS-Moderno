"use strict";

//Parametros por default 
function saludar() {
  var nombre = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var apellido = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'No tiene apellido';
  console.log("Hola ".concat(nombre, " ").concat(apellido));
}

saludar('chuz', 'regis'); //agumento  son lo valores reales

saludar('chuz');
saludar();
//# sourceMappingURL=06-app.dev.js.map
