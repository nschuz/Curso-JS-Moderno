const ciptomonedasSelect = document.querySelector('#criptomonedas');
const monedasSelect = document.querySelector('.monedita');
const formulario = document.querySelector('#formulario');


const objBusqueda={
    moneda: '',
    criptomoneda:'',
}

//creamos un promise
const obtenerCriptomonedas= criptomonedas =>new Promise(resolve=>{
    resolve(criptomonedas);
});

 document.addEventListener('DOMContentLoaded', ()=>{
   consultarCriptomonedas();
    formulario.addEventListener('submit', submitFormulario);
    ciptomonedasSelect.addEventListener('change', leerValor);
    monedasSelect.addEventListener('change', leerValor);
}); 


function consultarCriptomonedas(){
    const url ='https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
    fetch(url)
    .then(respuesta=>respuesta.json())
    .then((resultado)=>{
     return  obtenerCriptomonedas(resultado.Data);
    })//obtene las criptomonedas mediante una proemsa 
    .then(criptomonedas=>selectCriptomonedas(criptomonedas))
//osea esta evitando el uso deun callback 
}

function selectCriptomonedas (criptomonedas){
     criptomonedas.forEach(cripto=>{
        const {FullName , Name }=cripto.CoinInfo;
        const option = document.querySelector('.divisor .opcion');
        option.value=Name;
        option.textContent=FullName;
        ciptomonedasSelect.appendChild(option); 
    }); 

    console.log(criptomonedas)
}


function leerValor(e){
    objBusqueda[e.target.name]=e.target.value;
    console.log(objBusqueda);
    }

function submitFormulario(e){
    e.preventDefault();

    //calidar 
    const {moneda , criptomoneda}=objBusqueda;
    if(moneda==='' || criptomoneda===''){
        mostrarAlerta('Ambos campos son obligatorios');
        return;
    }
    consultarApi();

} 
function mostrarAlerta(mensaje){
    
    const existeError= document.querySelector('.error');
    if(!existeError){
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('error');
    
        //mensaje de error
        divMensaje.textContent=mensaje;
        formulario.appendChild(divMensaje);
    
        setTimeout(() => {
            divMensaje.remove();
        }, 3000);
        
    }
    //consultar la api con los resultados 
    
  

    
}


function consultarApi (){
    const {moneda , criptomoneda}=objBusqueda;
    const url=`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
console.log('gola');
    fetch(url)
    .then(res=>res.json())
    .then(respuesta=>{
        console.log(url);
        console.log(respuesta);
        mostrarCotizacionHTML(respuesta.DISPLAY[criptomoneda][moneda]);
    })

}

function mostrarCotizacionHTML(cotizacion){
console.log(cotizacion);
}