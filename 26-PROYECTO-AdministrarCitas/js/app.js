
//campos del formulario
const mascotaInput = document.querySelector('#mascota');
const propietarioInput = document.querySelector('#propietario');
const telefonoInput = document.querySelector('#telefono');
const fechaInput = document.querySelector('#fecha');
const horaInput = document.querySelector('#hora');
const sintomasInput = document.querySelector('#sintomas');

//UI
const formulario =  document.querySelector('#nueva-cita');
const contenedorCitas = document.querySelector('#citas');


//Clases 

class Citas {
    constructor(){
        this.citas = [];
    }

    //vamos guardado cada cita
    agregarCita(cita){
        this.citas = [...this.citas, cita];
        console.log(this.citas);
    }

    eliminarCita (id){
        this.citas= this.citas.filter(cita=> cita.id !== id);
    }
}


class UI{
    imprimirAlerta(mesanje , id){

        //Crea div
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center' , 'alert' , 'd-blcok' , 'col-12');
    
        //Agregar clase en base al tipo de error 
        if(id==='error'){
            divMensaje.classList.add('alert-danger');
        }else{
            divMensaje.classList.add('alert-danger');
        }

        //insertamos x mensaje 
        divMensaje.textContent=mesanje;

        //agregar al dom 
        document.querySelector('#contenido').insertBefore(divMensaje , document.querySelector('.agregar-cita'));

        //quitar la alerta despues de 10s
        setTimeout(() => {
            divMensaje.remove();
        }, 5000);
    }

    //aplicamos destructuring obetenmos la citas del obejto
    imprimirCitas ({citas}){
        citas.forEach(cita =>{
            const { mascota , propietario , telefono , fecha , hora , sintomas ,id} = cita;
            
            const divCita = document.createElement('div');
            divCita.classList.add('cita' , 'p-3');
            divCita.dataset.id=id;

            //Scripting de los elemeno¿tos de la cita 
            const mascotaParrafo = document.createElement('h2');
            mascotaParrafo.classList.add('card-title' , 'font-weight-bolder');
            mascotaParrafo.textContent= mascota;

            //segundo 
            const propietarioParrafo = document.createElement('p');
            propietarioParrafo.innerHTML=`
            <span class="font-weight-bolder">Propietario: ${propietario}</span>
            `;

            //telefono 
            const telefonoParrafo = document.createElement('p');
            telefonoParrafo.innerHTML=`
            <span class="font-weight-bolder">Telefono: ${telefono}</span>
            `;

            //fecha
            const fechaParrafo = document.createElement('p');
            fechaParrafo.innerHTML=`
            <span class="font-weight-bolder">Fecha: ${fecha}</span>
            `;

            //hora 
            const horaParrafo = document.createElement('p');
            horaParrafo.innerHTML=`
            <span class="font-weight-bolder">Hora: ${hora}</span>
            `;
            
            //sintomas 
            const sintomasParrafo = document.createElement('p');
            sintomasParrafo.innerHTML=`
            <span class="font-weight-bolder">Sintomas: ${sintomas}</span>
            `;

            //Scripting 
    
            //botnn para elimnar esta cita 
            const btnEliminar = document.createElement('button');
            btnEliminar.classList.add('btn' , 'btn-danger' , 'mr-2');
            btnEliminar.innerHTML= 'Eliminar <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path></svg>';

            btnEliminar.onclick = () =>{
                eliminarCita (id);
            }

            //agergamos los parrafoas al html 
            divCita.appendChild(mascotaParrafo);
            divCita.appendChild(propietarioParrafo);
            divCita.appendChild(telefonoParrafo);
            divCita.appendChild(fechaParrafo);
            divCita.appendChild(horaParrafo);
            divCita.appendChild(sintomasParrafo);
            divCita.appendChild(btnEliminar);
            
            //agergar las citas al html 
            contenedorCitas.appendChild(divCita);

            
        });
    }

}

// instacimaos de forma global 
const ui = new UI();
const administarCitas = new Citas();

//Regsitar eventos 
eventListeners();
function  eventListeners(){
    mascotaInput.addEventListener('change' , datosCita);
    propietarioInput.addEventListener('change' , datosCita);
    telefonoInput.addEventListener('change' , datosCita);
    fechaInput.addEventListener('change' , datosCita);
    horaInput.addEventListener('change' , datosCita);
    sintomasInput.addEventListener('change' , datosCita);

    formulario.addEventListener('submit' , nuevaCita); 
}

//objeto de la infromaciond e la cita
const citaObj ={
    mascota : '',
    propietario : '',
    telefono : '',
    fecha : '',
    hora : '',
    sintomas : '',
}

//agrega datos al objeto cita
function datosCita (e){
    citaObj[e.target.name] = e.target.value; //.name obtiene el vallor de la etiqueta name del html 
}

//valida ya gerga una nueva cita a la clase cita 
function nuevaCita(e){
e.preventDefault();

//extare infromacion del obejtp cita
const  { mascota , propietario , telefono , fecha , hora , sintomas} = citaObj;

//validar 
if(mascota==='' || propietario === '' , telefono === '' , fecha==='' || hora==='' || sintomas==='' ){
    ui.imprimirAlerta('Todos los campos son obligaotorios ' , 'error')
    return; // es importante el return porqur sehuira ejecuntando
}

//generar un id unico
citaObj.id=  Date.now();


//creanod una nueva cita 
//le pasamos una copia del objeto global ya que si le pasamos el objeto asi 
//tenemos el probelma que como el objeto es  global repite su valores a tdoos  
administarCitas.agregarCita({...citaObj});

//reinicamos el obejto
reiniciarObjeto();

formulario.reset();

//mostarr el html 
ui.imprimirCitas(administarCitas)

//limpiamos 
//limpiarhtml();

}

//reiniciar obejto 
function reiniciarObjeto (){
    /* for (const key in citaObj) {
        citaObj[key]='';       
    } */

    citaObj.fecha="";
    citaObj.hora="";
    citaObj.mascota="";
    citaObj.propietario="";
    citaObj.sintomas="";
    citaObj.telefono="";


}

//LIMAPIAR HTML 
function limpiarhtml() {
    while(contenedorCitas.firstChild){
        contenedorCitas.removeChild(contenedorCita.firstChild);
    }
}

function eliminarCita (id){
    console.log('id: ',id);
    administarCitas.eliminarCita(id);

    //muestra mensaje 
    ui.imprimirAlerta('lA CITA SE ELIMINO');

    //refrescar citas
    ui.imprimirCitas(administarCitas);

}