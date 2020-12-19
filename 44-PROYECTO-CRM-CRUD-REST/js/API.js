const  url = 'http://localhost:4000/clientes';
//Nuestra REST API

//cuando se crea nuevo cliente 
export  const  nuevoCliente = async cliente =>{
   //insertamos a la base de datos
   //Enviamos una peticion POST AL SERVIDOR
    try {
        await fetch(url, {
        method: 'POST' , 
        body: JSON.stringify(cliente),
        headers: {
            'Content-Type':'application/json'
        }
            
    });

    window.location.href='index.html';//nos lleva al index

   }catch (err){
       console.log(err);
   }

}

//obtiene todos los clientes 
export const obtenerClientes =  async ()=>{
    try {
        //por default  fecth rusa get 
        const resultado = await fetch(url);
        const clientes = await resultado.json();
        return clientes;
    } catch (error) {
        console.log(error)
    }
}

//Eliminar CLiente 
export const eliminarCliente =async  (id)=>{

    try {
        await fetch(`${url}/${id}`,{
            method: 'DELETE'
        })
        
    } catch (error) {
        console.log(error);
    }

}

//Obtiene  un cliente por su id 
export const obtenerCliente = async id => {
    try {
        const resultado = await fetch (`${url}/${id}`);
        const cliente = await resultado.json();
        console.log(cliente);
        return cliente;

    } catch (error) {
        console.log(error);
    }
}

//Actualiza un resgitro 
export const editarRegistro = async cliente =>{
    console.log(cliente);
    try {
      
       await fetch (`${url}/${cliente.id}`,{
           method: 'PUT',
           body : JSON.stringify(cliente),
           headers :{
               'Content-Type': 'application/json'
           }
       });
       window.location.href = 'index.html';
        
    } catch (error) {
        console.log(erro)
    }
}