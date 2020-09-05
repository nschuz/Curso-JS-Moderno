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
        console.log(this.gastos);
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
    Presupuesto.nuevoGasto(gasto);


}