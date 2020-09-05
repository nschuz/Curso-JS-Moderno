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

//herencia 
 class Empresa extends Cliente {
    constructor(nombre , saldo , telefono , categoria){
        super(nombre, saldo)
        this.categoria = categoria;
        this.telefono= telefono;
    }
    static bienvenida (){
        return `Hola un metodo estatico de una clase hija`;
    }
 }


const empresa = new Empresa ('nombre' , 'saldo' , 'telefono' , 'categotia');
console.log(empresa);
console.log(Empresa.bienvenida());