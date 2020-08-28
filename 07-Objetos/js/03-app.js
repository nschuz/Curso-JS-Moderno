//Agregando o elimando mas propiedades al objeto 
const producto={

    nombre: "Monitor 20Pulgadas",
    precio: 30,
    disponinle: true,

}

//Agregar nuevas propiedades del objeto 
producto.imagen= "Imagen.jpg";//usa = porque ya esta fuera 

//Elimando una nueva propiedad
delete producto.disponinle;

console.log(producto);