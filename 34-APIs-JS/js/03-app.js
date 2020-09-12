window.addEventListener('online', actualizarEstado);
window.addEventListener('offline', actualizarEstado);

function actualizarEstado (){
    if (navigator.onLine){
        console.log('Estas cinectao');
    }else{
        console.log("No estas coenectado");
    }
}