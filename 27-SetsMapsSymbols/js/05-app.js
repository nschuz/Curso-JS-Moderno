//simbols no se crrea con  la palbra new 

const sym = Symbol();
const sym2 = Symbol();

//Nunca ningun simbols son guales auqnete tengan el mismo valor 

if (sym === sym2){
    console.log("Son iguales")
}else{
    console.log("No son igaules ")
}

const  nombre  = Symbol();
const  apellido  = Symbol();

const persona = {};

//Agregar nombre y apellido como llaves del objeto 
persona[nombre] ='Chuz';
persona[apellido]= 'regis';
persona.tipoClinete = 'Premium';

console.log(persona);
console.log(persona[nombre]);

//las propiedades que unsaun simbol no son iterables 
//no es iterable 

for (const key in persona) {
    console.log(key);
}

//Definir una descripcion de symbol 
const nombreCliente = Symbol('Nombre del cliente');
const cliente = {};

cliente[nombreCliente]= 'chuz';
console.log(cliente);
console.log(cliente[nombreCliente]);
console.log(nombreCliente);


