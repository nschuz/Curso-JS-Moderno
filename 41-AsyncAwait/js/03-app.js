function descargarClientes (){
    return new Promise ((resolve, reject)=>{

       const erro = false;

       setTimeout(()=>{

           if(!erro){
               resolve('El listado de clientes se descargo correctamente');
           }
           else{
               reject('Error en la conexion');
           }

       },3000);

    });
}
//simulamos una consulta api recordamos que un fetch es una api

//Async await 
const ejecutar = async  () =>{
    try {
        const respuesta = await descargarClientes();
       console.log(2+2);
       console.log(respuesta)
       }catch (error){
        console.log(error);
    }
}
//await detiene la eejcuacion hasta que se resuelve el promise