//Modificadores dee acceso 
class Cliente {

    #nombre; //lo s hacemos privado solo se puede modificar desde la clase 
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

    setNombre (nombre){
        this.nombre = nombre;
    }
    getNombre (){
        return this.#nombre;
    }

}

const juan = new Cliente('juan' , 6000);
console.log(juan);
console.log(juan.mostraInformacion());
console.log(juan.getNombre());