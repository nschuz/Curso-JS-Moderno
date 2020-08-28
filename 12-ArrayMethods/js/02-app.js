const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

meses.forEach((mes,i)=>{
    console.log(`${i}  ${mes}`);
    if (mes=='Abril'){
        console.log('Encontrado');
    }
})

//Econtrtar el indice de abril
const indice = meses.findIndex(meses =>meses==='Enero');
console.log(indice);

//Encontrar un indice de un arreglo de objeto 
const indice2 = carrito.findIndex(producto => producto.precio===100);
console.log(indice2);