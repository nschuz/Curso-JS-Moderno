"use strict";

var _this = void 0;

var btnFlotante = document.querySelector('.btn-flotante');
var footer = document.querySelector('.footer');
btnFlotante.addEventListener('click', function () {
  if (footer.classList.contains('activo')) {
    footer.classList.remove('activo');

    _this.btnFlotante.classList.remove('activo');
  } else {
    footer.classList.add('activo');
    btnFlotante.classList.add('activo');
    _this.textContent = 'X-Cerrar';
  }
});
//# sourceMappingURL=11-scripts.dev.js.map
