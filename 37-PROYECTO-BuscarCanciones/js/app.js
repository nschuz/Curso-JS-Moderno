import * as UI from './interfaz.js';
import API from './api.js';

UI.formularioBuscar.addEventListener('submit' , buscarCancion);

function buscarCancion(e){
    e.preventDefault();

    //Obtenert datos del formlario 
    const artista= document.querySelector('#artista').value;
    const cancion= document.querySelector('#cancion').value;


    if(artista==='' || cancion ===''){
        //El usuario dejo almenos un campo vacio
        UI.divMensaje.textContent='Error.. Todos los campos son obligatorios';
        UI.divMensaje.classList.add('error');

        setTimeout(() => {
            UI.divMensaje.textContent='';
            UI.divMensaje.remove();
        }, 3000);

        return;
    }

    //consultando una api

    const busqueda= new API(artista,cancion);
  busqueda.consultarAPI();

}

