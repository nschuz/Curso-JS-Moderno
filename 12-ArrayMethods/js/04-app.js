const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

let total=0;
carrito.forEach(producto=>total+=producto.precio);
console.log(total);


//Con un reduce 
//NOta este si cambia su sintaxis // el cero significa que inicia desde cero 
let resultado = carrito.reduce((total, producto)=>total+producto.precio,0);
console.log(resultado);