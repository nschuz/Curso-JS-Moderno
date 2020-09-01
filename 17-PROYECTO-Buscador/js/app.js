//Variables
//contenedor para los resultados 
const resultado = document.querySelector('#resultado');

const marca =document.querySelector('#marca');
const minimo =document.querySelector('#minimo');
const maximo =document.querySelector('#maximo');
const puertas =document.querySelector('#puertas');
const trasmision =document.querySelector('#transmision');
const year =document.querySelector('#year');
const color =document.querySelector('#color');
const min=2010;
const max=new Date().getFullYear();;


//Genenrar un objeto con la busqueda
const datosBusqueda ={
    marca: '',
    year: '',
    trasmision: '',
    color: '',
    puertas: '',
    minimo: '',
    maximo: '',
    
    

}



//Eventos
document.addEventListener('DOMContentLoaded' ,()=>{

    mostrarAutos(); //muestra los automoviles al acargar 

    //llena las opciones de años
    llenaSelect();

});

//Events listener para los select de busqueda
marca.addEventListener('change' , (e)=>{
  datosBusqueda.marca=e.targe.value;
  filtrarAuto();
} );

year.addEventListener('change' , (e)=>{
    datosBusqueda.year=e.targe.value;
  } );


trasmision.addEventListener('change' , (e)=>{
  datosBusqueda.trasmision=e.targe.value;
} );

color.addEventListener('change' , (e)=>{
    datosBusqueda.color=e.targe.value;
  } );

puertas.addEventListener('change' , (e)=>{
    datosBusqueda.puertas=e.targe.value;
  } );

minimo.addEventListener('change' , (e)=>{
    datosBusqueda.minimo=e.targe.value;
  } ); 
  
maximo.addEventListener('change' , (e)=>{
    datosBusqueda.maximo=e.targe.value;
  } );  







//Funciones
function mostrarAutos(){
    autos.forEach(auto => {
        const {marca, modelo , year ,trasmision ,color , precio, puertas}= auto;
        const autoHtml= document.createElement('p');
        autoHtml.textContent =`
        ${marca} ~ ${modelo} ~ ${year} ~ ${puertas} Puertas ~ Trasmision: ${trasmision} ~ ${color} ~ ${precio}
        `;

        //lo inyectamos en el html 
        resultado.appendChild(autoHtml);
    });
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
const resultado =  auto.filter(filtrarMarca)

}

//Esta es llmada funcion de alto nivel 
function filtrarMarca(auto){
    const {marca} = datosBusqueda.marca;
    if( marca){
        return auto.marca === datosBusqueda.marca;
    }else{
        return auto; //regresamos el auto completo 
    }//pero si el usuario no selecciona nda regresa el automovil compleot 
}