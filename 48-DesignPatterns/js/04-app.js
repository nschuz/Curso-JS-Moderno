
//
class InputHtml{
    constructor (type , nombre){
        this.type=type;
        this.nombre=nombre;
    }
    crearInput(){
        return `<input type="${this.type}" name="${this.nombre}">`
    }
}

class HTMLFactory {
    createElement(tipo, nombre){
        switch(tipo){
        case "text":
            return new InputHtml('text',nombre);
        case "tel":
            return new InputHtml('tel', nombre);    
            default:
                return;
        }
    }
}

const elemento = new HTMLFactory();
const inputText =  elemento.createElement("text", "nombre-cliente");
console.log(inputText.crearInput());

const elemento2 = new HTMLFactory();
const inputText2 =  elemento.createElement("tel", "telefono-cliente");
console.log(inputText2.crearInput());