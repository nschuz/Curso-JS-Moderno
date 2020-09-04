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

//Nota muy importante sar function porque busca en el objeto actual
//arrow busca la ventana global

const pedro = new cliente('Pedro' , 6000);
pedro.tipoCliente();
console.log(pedro.tipoCliente());