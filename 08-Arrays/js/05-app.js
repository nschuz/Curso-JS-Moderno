const carrito=[];

//de una forma dinamica

//Definir un producto
const producto ={
    nombre:"Monitor 32pulgadas",
    precio :400,
}
const producto2 ={
    nombre:"Monitor 32pulgadas",
    precio :400,
}

const producto3 ={
    nombre:"Monitor 32pulgadas",
    precio :400,
}


//Se van añadiendo al final del arreglo
carrito.push(producto);
carrito.push(producto2);

//Se van van añadiedo al inico del arreglo 
carrito.unshift(producto3);