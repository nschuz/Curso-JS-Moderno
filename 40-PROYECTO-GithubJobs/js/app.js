const formulario = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');

document.addEventListener('DOMContentLoaded', ()=>{
    formulario.addEventListener('submit', validaBusqueda);
});

function validaBusqueda (e){
    e.preventDefault();
    const busqueda = document.querySelector('#busqueda').value;

    if(busqueda.length<3){
        mostrarMensaje('Busqueda muy corta .... Añade más informacíon');
        return; //para que no s ejecue el codigo 
    }


    consultaAPI(busqueda);

    

}

function mostrarMensaje (msg){
    const alertaPrevio = document.querySelector('.alerta');
   if (!alertaPrevio){
    const alerta = document.createElement('div');
    alerta.classList.add('bg-gray-100', 'p-3' ,'text-center','mt-3','alerta');
    alerta.textContent=msg;
    formulario.appendChild(alerta);

    setTimeout(()=>{
        alerta.remove();
    },3000)
   }
   
   
}

function  consultaAPI(busqueda){
const githubUrl = `https://jobs.github.com/positions.json?search=${busqueda}`;
const url= `https://api.allorigins.win/get?url=${encodeURIComponent(githubUrl)}`;
//nos estamos slato esa parte de seguridad que no permite 
//hacer la peticion a la api directamente 

axios.get(url)
.then(respuesta => mostrarVacantes(JSON.parse( respuesta.data.contents)));
//No sp muestra un error de coors 
//Donde github la protegue ya que la estas consumiendo para 
//en resumen la api esta prtegida 



}

function mostrarVacantes(vacantes){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }

    if(vacantes.length>0){
        resultado.classList.add('grid');

        vacantes.forEach(vacante=>{
            const {company, title , type,url }= vacante;

            resultado.innerHTML+=`
            <div class="shadow bg-white p-6 rounded">
            <h2 class="text-2xl font-light mb-4">${title}</h2>
            <p class="font-bold uppercase">Compañia:  <span class="font-light normal-case">${company} </span></p>
            <p class="font-bold uppercase">Tipo de Contrato:   <span class="font-light normal-case">${type} </span></p>
            <a class="bg-teal-500 max-w-lg mx-auto mt-3 rounded p-2 block uppercase font-xl font-bold text-white text-center" href="${url}">Ver Vacante</a>
        </div>
            
            `;
        });

    }else{
        const noResultado = document.createElement('p');
        noResultado.classList.add('texte-center', 'mt-10','text-gray-600','w-full');
        resultado.classList.remove('grid');
        noResultado.textContent='No hay vacantes, Intenta con otro termino de busqueda';
        resultado.appendChild(noResultado);

    }
}