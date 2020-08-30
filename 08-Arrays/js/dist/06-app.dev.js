"use strict";

//Eventos al dar scrolll
window.addEventListener('scroll', function () {
  var scrollPy = window.scrollY;
  var premium = document.querySelector('.premium');
  var ubucacion = premium.getBoundingClientRect(); //nos dice la ubicacion

  if (ubucacion.top < 100) {
    console.log('El elemnto esta visisible');
  } else {
    console.log('Aun no , da mas scroll');
  }
});
//# sourceMappingURL=06-app.dev.js.map
