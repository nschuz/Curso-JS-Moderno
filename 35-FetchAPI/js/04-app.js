const cargarApiBtn = document.querySelector('#cargarAPI');

cargarApiBtn.addEventListener('click', obtenerDatos);

function obtenerDatos(){
    const url = 'https://picsum.photos/list';
    fetch(url)
        .then(res=>res.json())
        .then(resul=>mostrarHTML(resul))
        .catch(e=>console.log(e));
}

function mostrarHTML(datos){
    const constenido = document.querySelector('.contenido');
    let html = '';
    datos.forEach(perfil=>{
        const {author,post_url}=perfil;
        html+=`
        <p>Author: ${author}</p>
        <a href ="${post_url}" target="_blank">Ver imagen</a>
        `;
    })

    constenido.innerHTML=html;
}