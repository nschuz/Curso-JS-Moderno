const carrito=[];
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

// exite otra agegar funciones declarativas la que no modicfica la varibale original 
let resultado ;
resultado= [...carrito,producto];
resultado=[...resultado, producto2]; 
console.log(resultado);