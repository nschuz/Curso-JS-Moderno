"use strict";

var cardDiv = document.querySelector('card');
cardDiv.addEventListener('click', function (e) {
  //USmao delegation en vex de stop prpoagation
  console.log(e.target.classList);

  if (e.target.classList.contains('titulo')) {
    console.log('Diste click en titulo');
  }

  if (e.target.classList.contains('precio')) {
    console.log('Diste click en precio');
  }

  if (e.target.classList.contains('card')) {
    console.log('Diste click en card');
  }
});
//# sourceMappingURL=07-scripts.dev.js.map
