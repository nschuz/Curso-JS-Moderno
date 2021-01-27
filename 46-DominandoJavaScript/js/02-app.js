obtenerCliente("chuz");
function obtenerCliente(nombre){
console.log(`El nombes del cliente es: ${nombre}`);
}


//js ejecuta el codigo  en dos fase el primero registra las funciones y despues las amnda a llamar 

//si usamos fuctin expression
//en esta sintacis si marca un error  es como mi variable esta como undefined  como si solo la dercala obetnercliente2; estamos llamando una funcion que no tiene nada asociado 
obtenerCliente2("jaun");
const ontenerCliente2= function(nombre){
    console.log(`El nombre del cliente es ${nombre}`);
}