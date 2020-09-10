const carrito = new Set();

carrito.add('Camisa');
carrito.add('Camisa2');
carrito.add('Camisa3');
carrito.add('Camisa3');

//los elementos iguales o duplicadosno se agregan  al set 

console.log(carrito);
console.log(carrito.size);
console.log(carrito.has('Camisa3'));
carrito.delete('disco2');
carrito.clear();


//son ietrable 
// index  igual imprime el producto como segundo paremntro
carrito.forEach((producto , index  )=>{
    console.log(producto);
})

//un uos del sieguinete arreglo eliminar los duplicados 
const numeros = [10,20,10,20,30,40];
const no = [];
const noDuplicados = new Set(numeros);
console.log(noDuplicados);
for (let i=0 ; i<numeros.length; i++){
    for (let j=0 ; j<numeros.length-1; j++){
        if(i!=j){
            if(numeros[i]==numeros[j]){
                numeros[i] = 0;    
            }else{
                no[i]=numeros[i];
        }
}
}
}
console.log(numeros);
console.log(no);