//Parametros por default 

function saludar (nombre=null , apellido='No tiene apellido'){
    console.log(`Hola ${nombre} ${apellido}`);
}

saludar('chuz' , 'regis'); //agumento  son lo valores reales
saludar('chuz');
saludar();