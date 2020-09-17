const container = document.querySelector('#contenido');
const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');

window.addEventListener('load' ,()=>{
    formulario.addEventListener('submit' , buscarClima);
});

function buscarClima (e){
    e.preventDefault();
    //validar 
    const ciudad = document.querySelector('#ciudad').value;
    const pais = document.querySelector('#pais').value;
    console.log(pais);
    console.log(ciudad);
    console.log(container);

    if(ciudad==='' || pais===''){
        mostrarAdevertencia('Ambos campos son obligatorios');
        return;
    }



    //consultar api 
    consultarApi (ciudad , pais);
    
}

function mostrarAdevertencia(mensaje){
const alerta = document.querySelector('.bg-red-100');

if(!alerta){
//crar lalaerta 
const alerta = document.createElement('div');
alerta.classList.add('bg-red-100' ,'border-red-400','text-red-700' , 'px-4' , 'py-3' ,'rounded',
'max-w-md', 'mx-auto' ,'mt-6' , 'text-center');


alerta.innerHTML=`
<strong class ="font-bold">Error</strong>
<span class="block">${mensaje}</span>
`;
container.appendChild(alerta);

setTimeout(() => {
    alerta.remove();
}, 5000);

}

}

function consultarApi (ciudad , pais){

    const appId='01bdd8f09aea4acba51dda29d8f72c93';
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
    console.log(url);

    fetch(url)
    .then(respuesta=> respuesta.json())
    .then(datuos=>{
        limpiarhtml();
        if(datuos.cod==='404'){
            mostrarAdevertencia('Ciudad no encontrada');
            return;
        }

        //imprime la respuesta html
        mostrarClima(datuos);
    })
    .catch(e=>console.log(e))
}

function mostrarClima(datos){
    const {main:{temp , temp_max , temp_min}}=datos;
    const centigrados= temp-273.15;
    const actual = document.createElement('p');
    actual.innerHTML=`${centigrados} &#8451`;
    actual.classList.add('font-bold' , 'text-6xl');

    const resultadoDiv = document.createElement('div');
    resultadoDiv.classList.add('text-center', 'text-white');
    resultadoDiv.appendChild(actual);
    resultado.appendChild(resultadoDiv);

}

function limpiarhtml (){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}