//Mixin Pattern
class Persona {
    constructor(nombre, email){
        this.nombre= nombre;
        this.email= email;
    }
}

const funcionesPersona = {
    mostrarInformacion(){
        console.log(`Nombre Persona : ${this.nombre} ,Email ${this.email}`);
    }
}

//Añdir funcionespersona a la clase 
Object.assign(Persona.prototype , funcionesPersona);

const cliente = new Persona('Juan', 'nas@yahoo.com');

console.log(cliente)
cliente.mostrarInformacion();