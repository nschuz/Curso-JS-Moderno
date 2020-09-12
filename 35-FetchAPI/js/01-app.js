const cargarTxtBtn = document.querySelector('#cargarTxt');
cargarTxtBtn.addEventListener('click',obtenerDatos);

//podemos eneviar y recibir datos con fetch api
function obtenerDatos (){
    
    const url = 'data/datos.txt';
    //usa promise pero ya no tenemos que crera el resolve y el rject 

//lo que estamos hacuendo con fecth api consultamos el url
//traemos la respuesta y la respuesta la queremos como txt o json
    fetch(url)
        .then(respuesta=>{
            console.log(respuesta);
            return respuesta.text();
        })
        .then(datos=>{//entonces obten los datos
            console.log(datos);
        })
        .catch(err=>{
            console.log('error: ',err);
        })
}
