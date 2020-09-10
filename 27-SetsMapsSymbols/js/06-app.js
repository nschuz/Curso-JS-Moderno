// iteradores 

 function crearInterador (carrito){

    let i=0;

    return {
        siguiente : ()=>{
            const fin = (i>=carrito.length);
            const valor = !fin ? carrito[i++]:undefined;

            return{
                fin ,valor
            }
        }
    }

 }

 const carrito = ['1' , '2' , '3'];

 //utilizar el iterador 
 const recorrerIterador = crearInterador(carrito);

 console.log(recorrerIterador.siguiente());
 console.log(recorrerIterador.siguiente());
 console.log(recorrerIterador.siguiente());