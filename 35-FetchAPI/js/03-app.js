// cargar un json que es un arreglo 

const cargarJSONArrayBtn = document.querySelector('#cargarJSONArray');
cargarJSONArrayBtn.addEventListener('click', obtenerDatos );

function obtenerDatos (){
    const url = 'data/empleados.json';
    fetch(url)
        .then(respuesta=>respuesta.json())
        .then(resultado =>mostrarHTML(resultado))
        .catch(err=>console.log('error',err));
        
}


function mostrarHTML (empleados){
    const contenido = document.querySelector('.contenido');
    let html = '';
    empleados.forEach(empleados=>{
        const {id, nombre , empresa, trabajo}=empleados;
        html += `
        <p>Empleado: ${nombre}</p>
        <p>ID: ${id}</p>
        <p>Empresa: ${empresa}</p>
        <p>Trabajo: ${trabajo}</p>
        \n
        `;

    });

    contenido.innerHTML=html;
}