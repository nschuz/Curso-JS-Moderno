//los objetos como habiamos visto no es muy dinamosco 

//es mas dinamica usar object constructor 
//actualmente existen las clases pero antes se usaba esto 


function cliente (nombre , saldo){
    this.nombre = nombre;
    this.saldo= saldo;
}


const chuz = new cliente ('chuz' , 500);
console.log(chuz);


//Cada objeto tiene un proto y en ese proto son cosas que le podemos pasar 
//osea grgar funciones  exclusivas del objeto 
