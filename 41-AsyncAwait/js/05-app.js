const url = 'https://picsum/photos/list';

document.addEventListener('DOMContentLoaded', obtenerDatos);

function obtenerDatos (){
    fetch(url)
    .then(respuesta=>respuesta.json())
    .then(resultado=> console.log(resultado))
    .catch(error =>console.log(error));

}


async function obtenerDatos(){
    try{
    const respuesta = await fetch(url);
    //El await bloquea la respuesta hasta que se ejecute.
    const resultado = await respuesta.json();
    console.log(respuesta);

    }catch (error){
        console.log(error);
    }
}