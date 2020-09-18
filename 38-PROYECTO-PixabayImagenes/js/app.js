const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');
const paginacionDiv = document.querySelector('#paginacion');

const  resgitroPorPagina =40;
let totalPaginas;
let iterador;
let paginaActual=1;

window.onload= ()=>{
    formulario.addEventListener('submit', validarFormulario);
}


function validarFormulario (e){
    e.preventDefault();

    const terminoBusqueda= document.querySelector('#termino').value;
    if (terminoBusqueda===''){
        mostrarAlerta('Agregar untermino de busqueda');
        return;
    }
    buscarImagenes();
}

function mostrarAlerta(mensaje){
    const alerta = document.createElement('div');
    const existeAlerta=document.querySelector('.bg-red-100');
    if(!existeAlerta){
        alerta.classList.add('bg-red-100','border-red-400','text-red-700', 'px-4','py-3' ,'rounded','max-w-lg','mx-auto','mt-6' ,'text-center');
        alerta.innerHTML=`
        <strong class="font-bold">Error</strong>
        <span class="block sm:inline">${mensaje}</span>
        `;
        formulario.appendChild(alerta);
    }

    setTimeout(() => {
        alerta.remove();
    }, 3000);
}

function buscarImagenes(){


const termino = document.querySelector('#termino').value;    
const key ="18307412-06c29472e5fb4d720d719162b";
const url=`https://pixabay.com/api/?key=${key}&q=${termino}&per_page=40&page=${paginaActual}`;
//console.log(termino);
//console.log(url);

fetch(url)
.then(res=>res.json())
.then(resultado=>{
totalPaginas= calcularPagina(resultado.totalHits);
console.log(totalPaginas);
mostrarResultado(resultado.hits);
});
}

//generador que va a registrar la cantiad de elementos de acuerdo a las paginas ¨
//creamos un generador
function  *crearPaginador(total){
    for(let i=1; i<=total; i++){
       yield i; 
    }
}

function calcularPagina (total){
    return parseInt(Math.ceil(total/resgitroPorPagina));
}

function mostrarResultado(imagenes){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild); 
     }

     //iterando sobre el arreglo de resultados 
     imagenes.forEach(imagen=>{
        const {previewURL , likes, views , largeImageURL}=imagen;
        resultado.innerHTML+=`
        <div class="w-1/2 md:w-1/3 lg:w-1/4 p-3 mb-4">
      
        <div class="bg-white">
        <img class="w-full" src='${previewURL}'>
        

        <div clas="p-4">
        <p class="font-bold"> ${likes} <span class="font-ligh">Me gusta</span></p>
        <p class="font-bold"> ${views} <span class="font-ligh">Veces Vistas</span></p>
        
        <a
        class="w-full block bg-blue-800 hover:bg-blue-500 text-white uppercase font-bold text-center rounded mt-5 p-1"
        href="${largeImageURL} traget="_blank" rel="noopener noreferrer">
        Ver Imagen
        </a>
        
        </div>
        </div>
        </div>
         `;
     });
     //limpiare le paginador previo 
     while(paginacionDiv.firstChild){
        paginacionDiv.removeChild(paginacionDiv.firstChild);
    }
//generamos el html
     imprimirPaginador();
}

function imprimirPaginador(){
    iterador = crearPaginador(totalPaginas);
    while(true){
        const {value , done }= iterador.next();
        if(done)return;

        //creando el boton por cada leemnto 
        const boton = document.createElement('a');
        boton.href='#';
        boton.dataset.pagina=value;
        boton.textContent=value;
        boton.classList.add('siguiente' , 'bg-yellow-400' , 'px-4' , 'py-1' , 'mr-2' ,'font-bold' ,'mb-10' ,'uppercase' , 'rounded' );
        boton.onclick= ()=>{
            paginaActual=value;
            buscarImagenes();
        };
        paginacionDiv.appendChild(boton);
    }
}