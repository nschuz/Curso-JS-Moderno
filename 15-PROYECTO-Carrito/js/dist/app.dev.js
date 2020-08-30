"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

//Variables 
var carrito = document.querySelector('#carrito');
var contenedorCarrito = document.querySelector('#lista-carrito tbody');
var vaciarCarrito = document.querySelector('#vaciar-carrito');
var listaCursos = document.querySelector('#lista-cursos');
var artriculosCarrito = []; //funcion que registra todos los event lsitener 

cargarEventListeners();

function cargarEventListeners() {
  //Cuando agregas un curso presionando "Agregar al carrito"
  listaCursos.addEventListener('click', agregarCurso); //Elimina cursos del carrito 

  carrito.addEventListener('click', eliminarCurso); //Vaciar carrito

  vaciarCarrito.addEventListener('click', function () {
    //version mia 
    //artriculosCarrito='';
    //contenedorCarrito.innerHTML='';
    agregarCurso = []; //resetamos el arreglo 

    limpiarHtml(); //elimanos todo el html
  });
} //Funciones 


function agregarCurso(e) {
  e.preventDefault();

  if (e.target.classList.contains('agregar-carrito')) {
    var cursoSeleccionado = e.target.parentElement.parentElement;
    datosCurso(cursoSeleccionado);
  } //console.log(e.target.ClassList);//obsermos en donde le estamos dando click

} //Elimando curso del carrito 


function eliminarCurso(e) {
  console.log(e.target.classList);

  if (e.target.classList.contains('borrar-curso')) {
    var cursoId = e.target.getAttribute('data-id'); //Elimando del arreglo de articlosCarrito por el data-id
    //que se traiga todos menos el que queremos eliminar

    artriculosCarrito = artriculosCarrito.filter(function (curso) {
      return curso.id !== cursoId;
    });
    carritoHtml(); //volvemos iterar sobre el html y muestra su contenido
  }
} //Funcion lee el conteneido html que le dimos click y extrae la infromacion 


function datosCurso(curso) {
  console.log(curso); //creamos un objeto con el contenido del curso actual 

  var infoCurso = {
    imagen: curso.querySelector('img').src,
    title: curso.querySelector('h4').textContent,
    precio: curso.querySelector('.precio span').textContent,
    id: curso.querySelector('a').getAttribute('data-id'),
    cantidad: 1
  }; //revisa si elemtno ya existe en el carruto 

  var existe = artriculosCarrito.some(function (curso) {
    return curso.id === infoCurso.id;
  });

  if (existe) {
    //Actualizamos la cantidad
    var cursos = artriculosCarrito.map(function (curso) {
      if (curso.id === infoCurso.id) {
        curso.cantidad++;
        return curso; //rentorna el objeto atualizado
      } else {
        return curso; //retorna los objetos que no son actualizados 
      }
    });
    artriculosCarrito = _toConsumableArray(cursos);
  } else {
    //Agergamos a ccarito      
    artriculosCarrito = [].concat(_toConsumableArray(artriculosCarrito), [infoCurso]);
  } //console.log(infoCurso);
  //Agregando elementos al arreglo de carrito 
  //Tomamos una copia de mis carrirto de compras


  console.log(artriculosCarrito);
  carritoHtml();
} //Recorre el carrito y geenra el thml
//Munetra  el carrtor de comras ene el html 


function carritoHtml() {
  //limpia el hhtml
  limpiarHtml();
  artriculosCarrito.forEach(function (curso) {
    var imagen = curso.imagen,
        title = curso.title,
        precio = curso.precio,
        cantidad = curso.cantidad,
        id = curso.id;
    var row = document.createElement('tr');
    row.innerHTML = "\n        <td><img src=\"".concat(imagen, "\"  width=\"100\"></td>\n        <td>").concat(title, "</td>\n        <td>").concat(precio, "</td>\n        <td>").concat(cantidad, "</td>\n        <td> \n        <a href=\"#\" class=\"borrar-curso\" data-id=\"").concat(id, "\">X</a>\n        </td>\n        "); //AGREga o inyecta el tml del carrtioden en tbody

    contenedorCarrito.appendChild(row);
  });
} //Elimanado cursos del tbody 


function limpiarHtml() {
  //forma lenta 
  // contenedorCarrito.innerHTML='';
  while (contenedorCarrito.firstChild) {
    contenedorCarrito.removeChild(contenedorCarrito.firstChild);
  }
}
//# sourceMappingURL=app.dev.js.map
