const aplicarDescuento= new Promise((resolve , reject)=>{


    const descuento = true;

    if(descuento){
        resolve('Desceunto aplicado');
    }else {
        reject('No se puedo aplicar descuento');
    }

})


console.log(aplicarDescuento);
//cuando el promise se cumple 
//si falla usamos .cathc
/// podemos añadir una funcion !!
aplicarDescuento
    .then(resultado =>{
        console.log(resultado);
    })
    .catch(error=>{
        console.log(error);
    })


    aplicarDescuento
    .then(resultado =>descuento("felicidaes"))
    .catch(error=>console.log(error))

//hay tres valores posibles ...-m-1
//fulfilled - el prosmise se cumplio 
//reject  - el promise no se cumplio 
//cuando no hay nada ni resolve ni erejej = pending - no se ha cumplido y no jha sido rechazado

function descuento (mensaje){
    console.log(mensaje);
}