//Module Pattern

//El modulo anterior
const modulo1 =(function (){
    const nombre = "chuz";
    function hola(){
        console.log("hola");
    }

    return{
        nombre,
        hola
    }

})();

console.log(modulo1.nombre);

//Version nueva ecma

const mostarCliente = nombre =>{
    console.log(nombre);
}
export default mostarCliente;