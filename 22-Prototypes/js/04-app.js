//herencia protypes
function cliente (nombre , saldo){
    this.nombre = nombre;
    this.saldo= saldo;
}

cliente.prototype.tipoCliente = function(){
   // console.log('Desde mi nuevo proto');
    let tipo;
    if (this.saldo>10000){
        tipo= 'Gold';
    }else if(this.saldo >5000){
        tipo= 'Platino';
    }else{
        tipo='Normal';
    }
    return tipo
} //solo exclusivo de cliente
//  Instanciamos 

function persona (nombre , saldo , telefono ){
    cliente.call(this, nombre , saldo);
    this.telefono=telefono;
}
//heredamos la funciones de protype de cleinte a persona 
persona.prototype = Object.create(cliente.prototype);
persona.prototype.constructor = cliente;

//instaciamos 
const juan = new persona('juan' , 5000 , 103023);
console.log(juan);
console.log(juan.tipoCliente());