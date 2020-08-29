const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit' , validarFormulario);//no hay proeblma si pongo e en el callback

function validarFormulario (e){
    e.preventDefault();// prevenimos la accion como enviar el formulario o entrar un enlce 
    console.log(e.target.action);
}