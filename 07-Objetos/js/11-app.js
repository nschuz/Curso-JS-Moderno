const producto={

    nombre: "Monitor 20Pulgadas",
    precio: 30,
    disponinle: true,
    mostrarInfo : function (){
        console.log(`El produto tiene un precio de ${this.precio}`);

    }

}
//la palbra this hace regrencia a las lvalores o propiedades dentro de ese mismo objeto 
producto.mostrarInfo();