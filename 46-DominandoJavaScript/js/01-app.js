//Scope

//Sscope globla
const cliente = 'JUAN';

function mostrarCliente (){
    //Scope local
    const cliente = 'Ped';
    console.log(cliente);
}
mostrarCliente();