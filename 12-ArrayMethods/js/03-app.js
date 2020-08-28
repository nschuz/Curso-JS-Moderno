// every  todos los elemntos del arreglo deb cumplir la condicion

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

//Todos deben cumplir la condicion
const resultado= carrito.every(producto => producto.precio <500);
console.log(resultado);

//mientras que some solo puede cumplir una 

//Al menos uno debe cumplir la condicion
const resultado2= carrito.some(producto => producto.precio <500);
console.log(resultado2);