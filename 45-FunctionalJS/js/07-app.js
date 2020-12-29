//Funciones Puras 
//Funciones que retornan un dato nuevo y no modifican la variable o la varible global 
//Retorna  en base a sus parametros que reciba 
//Ejmplo recibe 1 datos retorna 1 datos 
const dublicar = (numero) => {
    return numero*2;
}

const numero1= 20;
const resultado= dublicar(numero1);

console.log(resultado);
console.log(numero1);
