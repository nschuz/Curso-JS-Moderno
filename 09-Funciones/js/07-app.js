//como se comunican las funciones entre si
iniciar();

function iniciar () {
    console.log('Iniciando APP');
    segundaFunccion();
    usuartioAutentificado('chuz');
}

function segundaFunccion (){
    console.log("Desde de la funcion segunda");
}

function usuartioAutentificado(usuario){
    console.log('Usuario autentificado exitozamente');
    console.log(`Hola ${usuario}`);
}