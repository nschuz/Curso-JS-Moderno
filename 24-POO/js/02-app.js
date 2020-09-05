//class declartion 
class Cliente {

    constructor(nombre  , saldo){
        this.nombre = nombre;
        this.saldo= saldo;
    }

    mostraInformacion (){
        return `Cliente ${this.nombre} , tu saldo es de ${this.saldo}`
    }

    //son llamados desde la clase
    static bienvenida (){
        return `Hola un metodo estatico`;
    }

}

const juan = new Cliente();
console.log(juan);

//class expression
const Cliente2 =  class {
    constructor(nombre  , saldo){
        this.nombre = nombre;
        this.saldo= saldo;
    }

}

const chuz = new Cliente2 ();
console.log(chuz);