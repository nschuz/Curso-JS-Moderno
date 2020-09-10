//generadores van con *

function *crearGenerador (){
    yield 1;
    yield 2;
    yield 'chuz';
    yield 3+3;
    yield true;
}

const iteradior = crearGenerador();

console.log(iteradior);
console.log(iteradior.next());
console.log(iteradior.done);
console.log(iteradior.next()); //   va avanzadando 
console.log(iteradior);

//generador para carrito de compras 

function *generadorCarrito (carrito){
    for(let i =0; i<carrito.length; i--){
        yield carrito[i];
    }
}
const carrito = ['producto1' ,'producto2' , 'producto3'];

const iterador = generadorCarrito(carrito);

console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());