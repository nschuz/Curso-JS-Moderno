//FOR eACH
const numeros = [10,20,30,50,50,60];
const carrito =[
    {nombre: "chuz", precio: 500},
    {nombre: "chuz1", precio: 500},
    {nombre: "chuz3", precio: 500},
    {nombre: "chuz4", precio: 500},
    {nombre: "chuz6", precio: 500},
    {nombre: "chuz7", precio: 500},
    {nombre: "chuz8", precio: 500},
];


//La diefrencia es que map te crea un arreglo nuevo
const arreglo= carrito.forEach(function (producto){
   return console.log(`${producto.nombre}`);
});


const arreglonuevo= carrito.map(function (producto){
  return  console.log(`${producto.nombre}`);
});

console.log(arreglo);
console.log(arreglonuevo);


//maps en sitaxis es casi igual
//.map difercias entre forEach y map 
