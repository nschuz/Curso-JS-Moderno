"use strict";

var reproducir = {
  nombre: function nombre(id) {
    console.log("Reproduciendo cacion con el id ".concat(id));
  },
  pausar: function pausar() {
    console.log("Pausando...");
  },
  crearPalylist: function crearPalylist(nombre) {
    console.log("PlayList creada ".concat(nombre));
  }
};
reproducir.nombre(30);
reproducir.pausar();
reproducir.crearPalylist('techno');
//# sourceMappingURL=09-app.dev.js.map
