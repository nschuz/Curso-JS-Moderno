//Constructores 
function Seguro(marca, year, tipo) {
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
}

//Reliza la cotizacion con los datos 
Seguro.prototype.cotizaSeguro = function () {
    /*1.Americano 2.Asiatico 3.Europeo */
    let cantidad;
    const base =2000;

    
    switch (this.marca) {

      

        case '1':
            cantidad= base *1.15;
            break;

        case '2':
            cantidad= base *1.05;
            break;

        case '3':
            cantidad= base *1.35;
            break;



        default:
            break;
    }

    //Leer el año 
    const diferecnia = new Date().getFullYear() - this.year;


    //Cda año que la difrencia sea menor 
    cantidad -= ((diferecnia*3)*cantidad)/100;

    //si el seguro es basico se multiplica por 30%
    // si en completo por 50%
    if(this.tipo==='basico'){
        cantidad *= 1.30;
    }else{
        cantidad *= 1.50;
    }
    return cantidad;
}

function UI() {}

//llena las opciones de los años 
UI.prototype.llenaOpciones = () => {
    const max = new Date().getFullYear(),
        min = max - 20;
    const selectYear = document.querySelector('#year');
    for (let i = max; i > min; i--) {
        let option = document.createElement('option');
        option.value = i;
        option.innerText = i;
        selectYear.appendChild(option);
    }
};

//MUestra alertas en pantalla 
UI.prototype.mostrarMensaje = function (mensaje, tipo) {
    const div = document.createElement('div');
    if (tipo === 'error') {
        div.classList.add('mensaje', 'error', 'mt-10');
    } else {
        div.classList.add('mensaje', 'correcto', 'mt-10');
    }
    div.textContent = mensaje;

    const formulario = document.querySelector('#cotizar-seguro');
    formulario.insertBefore(div, document.querySelector('#resultado'));
    setTimeout(() => {
        div.remove();
    }, 3000);

}

UI.prototype.mostrarResultado = (seguro , total)=>{
    const {marca , year , tipo} = seguro;
        //Crear el rsultado 
        const div = document.createElement('div');
        div.classList.add('mt-10');
    let textoMarca="";
    switch(marca){
        case '1': 
        textoMarca ='Americano'
        break;

        case '2': 
        textoMarca ='Asiatico'
        break;

        case '3': 
        textoMarca ='Europeo'
        break;

        default:
            break;
    }

        div.innerHTML =`
        <p class="header">Tu resumen</p>
        <p class="font-bold">Total: <span class ="font-normal"> ${total} </span></p>
        <p class="font-bold">Marca: <span class ="font-normal"> ${textoMarca} </span></p>
        <p class="font-bold">Year: <span class ="font-normal"> ${year} </span></p>
        <p class="font-bold">Tipo: <span class ="font-normal"> ${tipo} </span></p>
        
        `;
      
        const resultadoDiv = document.querySelector('#resultado');
        

        //MOstrar resultado
        const spinner = document.querySelector('#cargando');
        spinner.style.display='block';

        setTimeout(()=>{
            spinner.style.display='none';//se borra el spinner y se meustra el resultado
            resultadoDiv.appendChild(div);
        })

}

//instaciar Ui 
const ui = new UI();

document.addEventListener('DOMContentLoaded', () => {
    ui.llenaOpciones();
})


///recoemdacioncuando usemos selctores no meterlo a un prototype

cargarEventListeners()

function cargarEventListeners() {
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.addEventListener('submit', cotizarSeguro);
}


function cotizarSeguro(e) {
    e.preventDefault();
    // console.log('cotizando');

    //Leer la marca seleccionada 
    const marca = document.querySelector('#marca').value;

    //leer el año selecciano 
    const year = document.querySelector('#year').value;
    //leer el tipo 
    const tipo = document.querySelector('input[name="tipo"]:checked').value;

    if (marca === '' || year === '' || tipo === '') {
        ui.mostrarMensaje('Todos los campos deben ser obligatorios', 'error');
        return;

    }

    ui.mostrarMensaje('Cotizando...', 'Exito');

    //ocultar las cotizaciones previas 
    const resultados = document.querySelector('#resultado div');
    if(resultados!=null){
        resultados.remove();
    }


    ///INstaciar el seguro 
    const seguro = new Seguro(marca, year, tipo);
    //seguro.cotizaSeguro();


    const total = seguro.cotizaSeguro();


    //Utilizar el protoype 
    ui.mostrarResultado(seguro, total);

}