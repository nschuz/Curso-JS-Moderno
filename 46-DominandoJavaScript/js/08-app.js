self.onload= ()=>{
    console.log('Ventana Lista');
}

const producto = {
    nombre: 'Monitro 20 pulgadas',
    precio : 30,
    disponible: true,
    mostrarInfo: function(){
        const self=this;
        return `El precio: ${self.precio}`;
    }
}

console.log(producto.mostrarInfo());