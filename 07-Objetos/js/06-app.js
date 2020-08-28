const producto={

    nombre: "Monitor 20Pulgadas",
    precio: 30,
    disponinle: true,
    informacion :{
        medida:{
            peso: 20,
        },
        fabricacion: {
            pais:'China,'
        },
    
}
}

//Destructiring en objetos anidados

const {nombre , informacion , informacion:{fabricacion,fabricacion: {pais}}}=producto;
console.log(informacion);
console.log(fabricacion);
console.log(pais);