(function (){

    let DB;
    const formulario = document.querySelector('#formulario2');

    document.addEventListener('DOMContentLoaded' , (e)=>{
       // e.stopPropagation();
        conectarDB();
        formulario.addEventListener('submit',validarCliente);

    });


    function conectarDB(){
         const abrirConexion = window.indexedDB.open('crm',1);

         abrirConexion.onerror = function (){
             console.log("Hubo un error");
         }

         abrirConexion.onsuccess= function (){
             console.log('exitoso')
             DB=abrirConexion.result;
         }
    }

    function validarCliente (e){
        e.stopPropagation();
       e.preventDefault();
        console.log(e);
        console.log("validado..");
        //leer todos los imputs 
        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa = document.querySelector('#empresa').value;
    

        if(nombre==='' || email===''|| telefono===''|| empresa===''){
            imprimirAlerta('Todos los campos son obligatortios' , 'error');
            return;
        }

    }

  function  imprimirAlerta(mensaje ,id){
    //crear la alerta
    const divMensaje = document.querySelector('div');
    divMensaje.classList.add('px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto' , 'mt-6' , 'text-center' , 'border');

    if(id==='error'){
        divMensaje.classList.add('bg-red-100','border-red-400' , 'text-red-700');
    }else{
        divMensaje.classList.add('bg-green-100', 'border-green-400' , 'text-green-700');
    }
    divMensaje.textContent=mensaje;

    formulario.appendChild(divMensaje);
    setTimeout(() => {
        divMensaje.remove();
    }, 5000);
    }

})();