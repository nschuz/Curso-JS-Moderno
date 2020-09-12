//CLABACKS 
const paises = ['Franacia' , 'España' , 'Portugal' , 'Australia'];

function nuevoPais (pais , callback){
    setTimeout(() => {
        paises.push(pais);
        callback();
    }, 2000);
}

function mostrarPaises (){
    setTimeout(() => {
        paises.forEach(pais=>{
            console.log(pais);
        })
    }, 1000);
}

//mostrarPaises();
nuevoPais('Alemania' , mostrarPaises);

//un calback mandamos a llmaar una funcion agregamos una funcion 
//