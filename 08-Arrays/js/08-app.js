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

//Elimanar ultimo elemnto dde un arreglo 
carrito.pop();

//Elimnar al inicio del arreglo 
carrito.shift();


//Elimnar cualquier lemento 
carrito.splice(1);//desde la poscion y el segundo cuantps

console.log(resultado);

