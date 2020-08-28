const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//comprobra si un valor existe en un arreglo 
meses.forEach(mes =>{
    if (mes==='Enero')
    console.log("Enero si existe");
});

//otra forma 
const resultado = meses.includes('Enero');
console.log(resultado);

//Includes no fucniona en unaregglo d eobjeto 

//some se usa en una rreglo de objetos
const existe = carrito.some(producto =>{
    return producto.nombre==='Celular';
});

console.log(existe);

//En unarreglo tradiciona 
const existe2 = meses.some(mes => mes ==='Enero');
console.log(existe2)