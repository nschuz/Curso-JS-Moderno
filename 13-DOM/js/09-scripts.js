//Elimando elemntos del DOm 

const primerEnlace = document.querySelector('a');
primerEnlcae.remove();// elimnar en si el elemento 


//Eliminar desde el padre
const navegacion = document.querySelector('.navegacion');
console.log(navegacion.children);
navegacion.removeChild(navegacion.children[2]);
//le pasamos la rferencia del elemnto que vamos eliminar