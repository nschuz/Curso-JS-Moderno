//Cambiando css con js 
const encabezado = document.querySelector('h1');

encabezado.style.backgounfColor='red';
encabezado.style.fontFamily='Arial';
encabezado.style.textTransform='uppercase';

const card = document.querySelector('card');
card.classList.add('nueva-clase');
card.classList.remove('card');

