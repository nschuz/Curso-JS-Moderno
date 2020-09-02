localStorage.setItem('nombre' , 'chuz');
sessionStorage.setItem('nombre', 'chuz');
//slo se pueden almacenar strings


const producto={
    nombre: 'Monitor 24 pulgadas',
    precio: 300,
}

const producto= JSON.stringify(producto);
localStorage.setItem('producto',producto);

const meses = ['enero' , 'febrero' , 'Marzo'];
localStorage.setItem('meses', JSON.stringify(meses));