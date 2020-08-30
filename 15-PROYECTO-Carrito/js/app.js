//Variables 
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarrito = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let artriculosCarrito=[];


//funcion que registra todos los event lsitener 
cargarEventListeners();
function cargarEventListeners(){
    //Cuando agregas un curso presionando "Agregar al carrito"
    listaCursos.addEventListener('click' , agregarCurso);

    //Elimina cursos del carrito 
    carrito.addEventListener('click' , eliminarCurso);

    //Vaciar carrito
    vaciarCarrito.addEventListener('click' , ()=>{
          //version mia 
          //artriculosCarrito='';
        //contenedorCarrito.innerHTML='';

        agregarCurso=[]; //resetamos el arreglo 
        limpiarHtml(); //elimanos todo el html
    });

}

//Funciones 
function agregarCurso(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado=e.target.parentElement.parentElement 
        datosCurso(cursoSeleccionado);
    }
    //console.log(e.target.ClassList);//obsermos en donde le estamos dando click
}

//Elimando curso del carrito 
function eliminarCurso (e){
    console.log(e.target.classList);
    if (e.target.classList.contains('borrar-curso')){
        const cursoId = e.target.getAttribute('data-id');

        //Elimando del arreglo de articlosCarrito por el data-id
        //que se traiga todos menos el que queremos eliminar
        artriculosCarrito= artriculosCarrito.filter(curso=>curso.id !== cursoId);
       carritoHtml(); //volvemos iterar sobre el html y muestra su contenido
    }
}


//Funcion lee el conteneido html que le dimos click y extrae la infromacion 
function datosCurso(curso){
    console.log(curso);

    //creamos un objeto con el contenido del curso actual 
    const infoCurso={
        imagen: curso.querySelector('img').src,
        title: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1,
    }

    //revisa si elemtno ya existe en el carruto 
    const existe = artriculosCarrito.some(curso=>curso.id === infoCurso.id);
    if(existe){
//Actualizamos la cantidad
        const cursos = artriculosCarrito.map(curso=>{
            if(curso.id===infoCurso.id){
                curso.cantidad++;
                return curso; //rentorna el objeto atualizado
            }else{
                return curso;//retorna los objetos que no son actualizados 
            }
        });
        artriculosCarrito=[...cursos];
    }else{
  //Agergamos a ccarito      
  artriculosCarrito =[...artriculosCarrito , infoCurso];
    }


    //console.log(infoCurso);

 //Agregando elementos al arreglo de carrito 
//Tomamos una copia de mis carrirto de compras

console.log(artriculosCarrito);
carritoHtml();

}




//Recorre el carrito y geenra el thml
//Munetra  el carrtor de comras ene el html 
function carritoHtml() {
    
//limpia el hhtml
limpiarHtml();
    
    artriculosCarrito.forEach((curso) =>{
        const {imagen, title , precio , cantidad ,id} = curso;
        const row = document.createElement('tr');
        row.innerHTML=`
        <td><img src="${imagen}"  width="100"></td>
        <td>${title}</td>
        <td>${precio}</td>
        <td>${cantidad}</td>
        <td> 
        <a href="#" class="borrar-curso" data-id="${id}">X</a>
        </td>
        `;
        
        //AGREga o inyecta el tml del carrtioden en tbody
         contenedorCarrito.appendChild(row);
    });
}

//Elimanado cursos del tbody 
function limpiarHtml(){
    //forma lenta 
   // contenedorCarrito.innerHTML='';

    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}