//copiar dos objetos 
const producto={

    nombre: "Monitor 20Pulgadas",
    precio: 30,
    disponinle: true,

}

const medidas= {
    peso :10, 
    medida :30,
}

const resultado =Object.assign(producto , medidas);
//otra forma
const resultado2 = {...producto, ...medidas};