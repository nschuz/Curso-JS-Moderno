//Constructor Pattern 

//teenmos una clase pincipal  o padre y heredar sobre ellas seria como una clase abtsracta 
class Persona {
    constructor(nombre, email){
        this.nombre= nombre;
        this.email= email;
    }
}
class Cliente extends Persona {
    constructor(nombre, email, empresa){
        super(nombre, email);
        this.empresa=empresa;
    }
}

const cliente = new Cliente("Chuz", "nsd@yahoo.com", "Codigo con juan");