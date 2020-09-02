// Variables 
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
const btn = document.querySelector('#boton');
let tweets = [];


//Event Listeners 
cargarEventListeners();

function cargarEventListeners() {
    //cuando el usuario agregar un nuevo twtte
    formulario.addEventListener('submit', agregaTweet);

    //Cuando el documento esta listo 
    document.addEventListener('DOMContentLoaded' ,()=>{
        tweets = JSON.parse(localStorage.getItem('tweets')) || [];

        crearHTML();
        

    });
}


//Funciones
function agregaTweet(e) {
    e.preventDefault();
    //console.log('Agregando Tweet');

    //Text area donde el ususario escribe 
    const twett = document.querySelector('#tweet').value;
    if (twett === '') {

        mostrarError('Un mensaje no puede ir vacio');
        return; //Evita que se eejecutan mas lienas de codifo
    }
    const tweetObj = {
        id: Date.now(),
        twett,
    }

    //Añadir al arreglo de twwets 
    tweets = [...tweets, tweetObj];
    console.log(tweets);

    //una vez agregado vamosa crear el html 
    crearHTML();

    //Reiniciar el formulario 
    formulario.reset();
}

//MOstrar error
function mostrarError(mensaje) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('error');

    //Insertarlo en contenido 
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    if (document.querySelector('p')) {
        setTimeout(() => {
            btn.disabled = false;
        }, 3000);
        btn.disabled = true;
    } else {
        btn.disabled = false;
    }

    setTimeout(() => {
        mensajeError.remove();

    }, 3000);




}

//Mostrar un listado de los tweets 
function crearHTML() {
    limpiahtml();
    if (tweets.length > 0) {
        tweets.forEach(tweet => {
            //AGrgar un boton 
            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.innerText = 'X'

            //Añadir la funcion de elimanr 
            btnEliminar.onclick=()=>{
                borrarTweet(tweet.id);
            }


            const li = document.createElement('li');
            li.innerText = tweet.twett;
            li.appendChild(btnEliminar);
            listaTweets.appendChild(li);

        });
    }

    sincronizarStorage();

}


function sincronizarStorage(){
    localStorage.setItem('tweets' , JSON.stringify(tweets));
}


//limpiar html 
function limpiahtml (){
    while(listaTweets.firstChild){
        listaTweets.removeChild(listaTweets.firstChild);
    }
}

//Elimina tweet 
function borrarTweet(id){
    console.log('Borrando'+id);
    tweets= tweets.filter(tweet => tweet.id!=id);

    console.log(tweets);
    crearHTML();
}