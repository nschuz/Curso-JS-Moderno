const cargarJSONBtn = document.querySelector('#cargarJSON');

cargarJSONBtn.addEventListener('click', obtenerDatos);

function obtenerDatos(){
    const url = 'data/empleado.json';
    fetch(url)
        .then(resp=>{
            console.log(resp);
            return resp.json();
        })
        .then(resp=>{
            console.log(resp);
            mostrarHTML(resp);
        })

}

function mostrarHTML ({empresa, id, nombre , trabajo }){
    const contenido = document.querySelector('.contenido');

    contenido.innerHTML=`
    <p>Empleado: ${nombre}</p>
    <p>ID0: ${id}</p>
    <p>Empresa: ${empresa}</p>
    <p>Trabajo: ${trabajo}</p>
    
    `;
}