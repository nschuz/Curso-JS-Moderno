//Destructing object 
const producto={

    nombre: "Monitor 20Pulgadas",
    precio: 30,
    disponinle: true,

}

//Deestructuring 
//const  nombre = producto.nombre;// version antigua y no recomendable 
const {nombre , precio} =producto;
console.log(precio);