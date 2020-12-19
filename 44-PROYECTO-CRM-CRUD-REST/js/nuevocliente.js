//protegemos el codigopara que las variables no 
//se salgan del archivo usamos iFI

import {mostrarAlerta} from  './funciones.js';
import {nuevoCliente} from './API.js';
import {validar} from './funciones.js';

(
function (){

    const formulario = document.querySelector('#formulario');
    const btnSubmit = document.querySelector('#sub');
    formulario.addEventListener('submit', validarCliente);

    function validarCliente (e){
        e.preventDefault();
        const nombre   = document.querySelector('#nombre').value;
        const email    = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa  = document.querySelector('#empresa').value;
    
        const cliente ={
            nombre , email, telefono, empresa
        }

       // console.log(Object.values(cliente).every(input=>input!==""));

       if (validar(cliente)){
           console.log("Todos los campos son correctos ");
            nuevoCliente(cliente);
        
        }else{
           console.log("Todos los campos son obligatorios");
           mostrarAlerta('Todos los campos son obligatorios');
           return;
       }

    }

    


}
)();