
//un scope es cuando imprimimo una variable dentro de una funcion 
//es decir la variables dentro de una funcion no saben si existen otras funciones 

//clousre es una forma de acceder a una funcion o valor desde el exterior 


const cliente = 'Chuz';

function Mcliente (){
    const cliente = 'pablo'
}
console.log(cliente);
Mcliente();

//un closure permite obtener o visluzair un valor interno en el exteriro 

 const obtenerCliente22 =()=>{
    const nombre= "Juan";

    function muestraNombre(){
        console.log(nombre);  
    }
    return muestraNombre;

 }

 const clinte = obtenerCliente22();
 clinte();