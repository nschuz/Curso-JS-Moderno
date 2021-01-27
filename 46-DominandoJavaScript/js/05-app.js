//Exlicit Biding 
//se usa cuando no tengo los datos dentro del mismo objeto
function persona (el1 , el2){
    console.log(`Mi nombre es ${this.nombre}, y escucho ${el1} y ${el2}`);
}

const informacion ={
    nombre: 'Juan'
}
const musicaFavorita= ['Techno', 'Deep'];

//Aqui usamos call es como si jaara ese objeto aqui adentro es una funcion externa que intoduce valores externos
persona.call(informacion,musicaFavorita[0], musicaFavorita[1]);


//apply la diferencia entre apply y call  es que apply si toma  todo el arreglo mientras que call toma los elemntos  de forma  individual
persona.apply(informacion , musicaFavorita);

//bind igual funciona  es similar a call pero crea una nueva funcion 
const nuevaFn = persona.bind(informacion , musicaFavorita[0] , musicaFavorita[1]);
nuevaFn();