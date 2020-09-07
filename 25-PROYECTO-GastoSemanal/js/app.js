// variables y selectores 
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');




//Eventos 
eventListeners();
function eventListeners (){
    document.addEventListener('DOMContentLoaded' , preguntarPresupuesto);
    formulario.addEventListener('submit' , agregarGasto);
}


//clases
class Presupuesto {

    constructor(presupuesto){
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
         this.gastos=[];
    }

    nuevoGasto (gasto){
        this.gastos= [...this.gastos , gasto];
        this.calcularRestante();
    //    console.log(this.gastos);
    }

    calcularRestante(){
        const gastado = this.gastos.reduce((total, gasto)=>
          total + gasto.cantidad ,0  
        );
        this.restante=this.presupuesto-gastado;

        //console.log(gastado );
    }
    elimanarGasto(id){
        this.gastos= this.gastos.filter(gasto =>gasto.id !== id);
        this.calcularRestante();
    }

}
class UI {

    insertarPresupuesto(cantidad){
        //console.log(cantidad);
        //Extrayendo el valor
        const {presupuesto , restante}= cantidad;
        //Agregandolo a l html 
        document.querySelector('#total').textContent =presupuesto;
        document.querySelector('#restante').textContent =restante;

    }
    
    imprimirAlerta(mensaje , tipo){

        //crear div 
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center' , 'alert');
        if(tipo==='error'){
            divMensaje.classList.add('alert-danger');
        }else{
            divMensaje.classList.add('alert-success');
        }

        //Mensaje 
        divMensaje.textContent=mensaje;

        //inyectamos el div al html
        document.querySelector('.primario').insertBefore(divMensaje , formulario);

        setTimeout(() => {
            divMensaje.remove();
        }, 3000);


    }

agregarGastoListado(gastos){
    this.limpiarhtml(); //elimina el html previo

        console.log(gastos);
//itetra gastos 
gastos.forEach(gasto => {
    const {cantidad , nombre , id} = gasto;
    // creamos li 
    const nuevoGasto = document.createElement('li');
    nuevoGasto.className= 'list-group-item d-flex justify-content-between align-items-center'
   // nuevoGasto.setAttribute('data-id',id);
    nuevoGasto.dataset.id=id;
    //agregat html 
    nuevoGasto.innerHTML= `${nombre} 
    <span class="badge badge-primary badge-pill">
    ${cantidad}
    </span>`;

    //boton borrar gasto
    const btnBorrar = document.createElement('button');
    btnBorrar.classList.add('btn' , 'btn-danger' , 'borrar-gasto');
    btnBorrar.textContent='Borrar';
    btnBorrar.onClick = ()=>{
        elimanarGasto(id);
    }// asi es la forma correcta  porqeu si no manda llmar la funcion . aui munetras le de click
    nuevoGasto.appendChild(btnBorrar);

    //Agregar al html
    gastoListado.appendChild(nuevoGasto); //no borra el html previo apendchild


});
    }

    limpiarhtml(){
        while(gastoListado.firstChild){
            gastoListado.removeChild(gastoListado.firstChild);
        }
    }

    actualizarRestante (restante){
        document.querySelector('#restante').textContent =restante;
        
    }

    comprobarPresupuesto(presupustoObj){
        const {presupuesto, restante}= presupustoObj;
        const restantediv = document.querySelector('.restante');
        //comprobar el 25 %
        if((presupuesto/4)>restante){
            restantediv.classList.remove('alert-success', 'alert-warning');
            restantediv.classList.add('alert-danger');
        }else if ((presupuesto/2)>restante){
            restantediv.classList.remove('alert-success');
            restantediv.classList.add('alert-warning');
        }else{
            restantediv.classList.remove('alert-danger' , 'alert-warning');
            restantediv.classList.remove('alert-success');
        }
            // si el total es cero o menor 
            if(restante<=0){
                ui.imprimirAlerta('presupuesto agotado' , 'error');
                formulario.querySelector('button[type="submit"]').disabled=true;
            }
    }

}
//instanciar 
const ui = new UI();
let presupuesto; // creamos el objeto de forma global 


//funciones 
function preguntarPresupuesto (){
    const presupuestoUsuario = prompt('Cual es tu presupuesto');
    console.log(Number(presupuestoUsuario));
    if (presupuestoUsuario==='' || presupuestoUsuario ===null || isNaN(presupuestoUsuario) || presupuestoUsuario<=0){
        window.location.reload();
    }
    presupuesto = new Presupuesto(presupuestoUsuario);
    console.log(presupuesto);
    ui.insertarPresupuesto(presupuesto);
}

//añadir gatos 
function agregarGasto (e){
    e.preventDefault();

    //Leer los datos del formulario 
    const nombre = document.querySelector('#gasto').value;
    const cantidad = Number (document.querySelector('#cantidad').value);


    //validar 
    if(nombre==='' || cantidad==='' ){
        ui.imprimirAlerta('Campor vacio' , 'error');
        return;
    }else if(cantidad<=0 || isNaN(cantidad)){
        ui.imprimirAlerta('Cnatidad no valida','error');
        return;
    }

    ///objeto con el gasto 
    const gasto = {nombre , cantidad , id:Date.now}; //une nombre y cantidad  a agasto 
    presupuesto.nuevoGasto(gasto);
    ui.imprimirAlerta('Gasto agregado');

//Imprimir los gatos 
const {gastos , restante}= presupuesto;
ui.agregarGastoListado(gastos);

ui.actualizarRestante(restante);

ui.comprobarPresupuesto(presupuesto);

    formulario.reset();

}

function elimanarGasto(id){
    //elimna del objeto
    presupuesto.elimanarGasto(id);
    
   // elimna del html
    const {gastos , presupuesto } = presupuesto
    ui.agregarGastoListado(gastos);

    ui.actualizarRestante(restante);
    ui.comprobarPresupuesto(presupuesto);
}