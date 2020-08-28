const producto = 'Monitor 20 ';
const precio = '30 USD';

console.log(producto.concat(precio)); // concatenamos 
console.log(producto +"   "+precio);
console.log(producto ,"   ",precio);

//Templates literal es mas eficiente 
console.log(`El procuto ${producto} tiene un precio de ${precio}`);

