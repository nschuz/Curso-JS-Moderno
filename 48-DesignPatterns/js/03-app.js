//singleton

//no permite crear multiples  instacias de una misma clase 

let instacia = null;
class Persona {
    constructor(nombre, email){
        if(!instacia){
        this.nombre = nombre;
        this.email = email;
        instacia=this;
        }else {
            return instacia;
        }
    }
}

const persona = new Persona("Chuz", "chuz@yahoo.com");

const persona2 =new  Persona("Chddduz", "chuz@yahoo.codddm");
console.log(persona);
console.log(persona2);