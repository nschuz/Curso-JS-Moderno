//currying 

const suma2 = (a,b,c) => a +b +c;

//a primer parcial 
const parcial2 = (a) => (b,c) => suma2(a,b,c);


const primerNumero2 = parcial2(5);
const resultado2 = primerNumero2(4,3);
console.log(resultado2);

//podemos divirdirla aun mas
const parcial = a=> b=> c=> suma2(a,b,c);
const primerNumero = parcial(5);
const segundoNumero = primerNumero(4);
const resultado = segundoNumero(1);
console.log(resultado);

//Otra forma 

const suma = (a,b,c) => a+b+c;
const parcial3 = a => b => c  => suma(a,b,c);

const resultadoParcial = parcial3(5)(4)(3);
console.log(resultadoParcial);