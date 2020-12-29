
//Funcion que retorna una funcion 
//Un doble arrow funcrion
const obtenerCliente2 = () => () => console.log("Chuz");

const fn = obtenerCliente2();
fn();