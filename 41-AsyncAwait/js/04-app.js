//Manejar Multiples awaits 
function descargarNuevosClientes(){
    return new Promise(resolve => {
        console.log("Descargando clientes.....");

        setTimeout(() => {
            resolve('los clientes fueron descargaof');
        }, 5000);
    })
} 

function descargarNuevosPedidos(){
    return new Promise(resolve => {
        console.log("Descargando Pedidos.....");

        setTimeout(() => {
            resolve('los pedidos fueron descargaof');
        }, 3000);
    })
} 
//Otra pregunta  
//async para que se sincrona 
const app = async () =>{

    try{
    
//Mejor optimizacion
const  respuesta= await Promise.all([descargarNuevosClientes(), descargarNuevosPedidos()]);
//usar esta sintaxix cuando sean consultas independeintes ganamos performances 
//porque comiezan al mismo tiempo

    
//No tan optimazado    
    const clientes = await descargarNuevosClientes();
    console.log(clientes);

    const pedidos = await descargarNuevosPedidos();
    console.log(pedidos);

    }catch (e){
        console.log(e)
    }


}