import {editarRegistro, obtenerCliente} from './API.js';
import {validar} from './funciones.js';
import {mostrarAlerta} from './funciones.js';

(function(){
//Campos del formulario 

const nombreInput = document.querySelector('#nombre');
const emailInput = document.querySelector('#email ');
const empresaInput = document.querySelector('#empresa');
const telefonoInput = document.querySelector('#telefono');
const idInput = document.querySelector('#id');

 document.addEventListener('DOMContentLoaded',async  ()=>{


    const parametrosURL = new URLSearchParams(window.location.search);
    const idCliente = parseInt(parametrosURL.get('id'));
    const cliente =await obtenerCliente(idCliente);
    console.log(cliente);
    
    mostrarCliente(cliente);


    //submit al formulario 
    const formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit' ,validarCliente);



});

function mostrarCliente(cliente){
    const {nombre ,empresa, email,  telefono, id}=cliente;
    nombreInput.value=nombre;
    empresaInput.value=empresa;
    idInput.value=id;
    emailInput.value=email;
    telefonoInput.value=telefono;
}

function validarCliente (e){
    e.preventDefault();
    const cliente ={
        nombre: nombreInput.value,
        empresa: empresaInput.value,
        email: emailInput.value,
        telefono: telefonoInput.value,
        id: parseInt(idInput.value)
    }
    if(!validar(cliente)){
        mostrarAlerta('Todos los campos son obligatorios');
        return;
    }else{

        console.log(cliente);
        //rescribe el objeto
        editarRegistro(cliente);
    }

    

    
}
    

})();