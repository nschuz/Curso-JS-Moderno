//Variables
//contenedor para los resultados 
const resultado = document.querySelector('#resultado');

const marca =document.querySelector('#marca');
const minimo =document.querySelector('#minimo');
const maximo =document.querySelector('#maximo');
const puertas =document.querySelector('#puertas');
const transmision =document.querySelector('#transmision');
const year =document.querySelector('#year');
const color =document.querySelector('#color');
const min=2010;
const max=new Date().getFullYear();;


//Genenrar un objeto con la busqueda
const datosBusqueda ={
    marca: '',
    year: '',
    transmision: '',
    color: '',
    puertas: '',
    minimo: '',
    maximo: '',
    
    

}



//Eventos
document.addEventListener('DOMContentLoaded' ,()=>{

    mostrarAutos(autos); //muestra los automoviles al acargar 

    //llena las opciones de años
    llenaSelect();

});

//Events listener para los select de busqueda
marca.addEventListener('change' , (e)=>{
  datosBusqueda.marca=e.target.value;
  filtrarAuto();
} );

year.addEventListener('change' , (e)=>{
    datosBusqueda.year=e.target.value;
    filtrarAuto();
  } );


transmision.addEventListener('change' , (e)=>{
  datosBusqueda.transmision=e.target.value;
  filtrarAuto();
} );

color.addEventListener('change' , (e)=>{
    datosBusqueda.color=e.target.value;
    filtrarAuto();
  } );

puertas.addEventListener('change' , (e)=>{
    datosBusqueda.puertas=e.target.value;
  } );

minimo.addEventListener('change' , (e)=>{
    datosBusqueda.minimo=e.target.value;
    filtrarAuto();
  } ); 
  
maximo.addEventListener('change' , (e)=>{
    datosBusqueda.maximo=e.target.value;
    filtrarAuto();
  } );  







//Funciones
function mostrarAutos(autos){
    
    limpiarhtml(); //Elimina el html previo

    autos.forEach(auto => {
        const {marca, modelo , year , transmision ,color , precio, puertas}= auto;
        const autoHtml= document.createElement('p');
        autoHtml.textContent =`
        ${marca} ~ ${modelo} ~ ${year} ~ ${puertas} Puertas ~ Trasmision: ${transmision} ~ ${color} ~ ${precio}
        `;

        //lo inyectamos en el html 
        resultado.appendChild(autoHtml);
    });
}

//Limpiar  html 
function limpiarhtml (){

    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }

}


//Gnera los años del select 
function llenaSelect(){

    for (let i=max; i>=min; i--){
        const opcion= document.createElement('option');
        opcion.value=i;
        opcion.textContent=i;
        year.appendChild(opcion); //agrega la opciones del año al slect

    }

}

// funcion que filtra en base de la busqueda 
function filtrarAuto(){

    //usualmnete es unarrowfunctio 
    //en este caso es una funcion de alto nivel 
const resultado =  autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarPrecio).filter(filtrarMaximo).filter(colorr).filter(puertass).filter(trans);
//console.log(resultado);



if(resultado.length){
    mostrarAutos(resultado);
}else{
    noResultado();
}

}

function noResultado (){
    limpiarhtml();
    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta' , 'error');
    noResultado.textContent=`No hay resultado`;
    resultado.appendChild(noResultado);
}



//Esta es llmada funcion de alto nivel 
function filtrarMarca(auto){
    const {marca} = datosBusqueda;
    if( marca){
        return auto.marca === marca;
    }else{
        return auto; //regresamos el auto completo 
    }//pero si el usuario no selecciona nda regresa el automovil compleot 
}

function filtrarYear(auto){
    const {year} = datosBusqueda;
    if(year){
        return auto.year === parseInt(year);
    }else{
        return auto; //regresamos el auto completo 
    }//pero si el usuario no selecciona nda regresa el automovil compleot 
}

function filtrarPrecio (auto){
    const {minimo} = datosBusqueda;
    if(minimo){
        return auto.precio >=minimo;
    }else{
        return auto; //regresamos el auto completo 
    }//pero si el usuari

}

function filtrarMaximo(auto){
    const {maximo} = datosBusqueda;
    if(maximo){
        return auto.precio <=maximo;
    }else{
        return auto; //regresamos el auto completo 
    }//pero si el usuari

}

function colorr(auto){
    const {color} = datosBusqueda;
    if(color){
        return auto.color ===color;
    }else{
        return auto; //regresamos el auto completo 
    }//pero si el usuari


}

function puertass(auto){
    const {puertas} = datosBusqueda;
    if(puertas){
        return auto.puertas ===puertas;
    }else{
        return auto; //regresamos el auto completo 
    }//pero si el usuari


}

function trans(auto){
    const {transmision} = datosBusqueda;
    if(transmision){
        return auto.transmision ===transmision;
    }else{
        return auto; //regresamos el auto completo 
    }//pero si el usuari


}
