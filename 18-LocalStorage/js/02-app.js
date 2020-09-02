//obteieneod datos de local stroarge 
const nombre = localStorage.getItem('nombre');
console.log(nombre);

const productoJson = localStorage.getItem('producto');
console.log(JSON.parse(productoJson));