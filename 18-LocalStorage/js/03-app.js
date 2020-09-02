//Elimando elemntos de locla stroarge 
localStorage.removeItem('nombre');

//Actuk¿lizar un resgitro 
const meses = JSON.parse(localStorage.getItem('meses'));
meses.push('Nuevo meses');

localStorage.setItem('meses');

localStorage.clear();