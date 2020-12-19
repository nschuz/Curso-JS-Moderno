const suma = (a,b) => a+b;
const multiplicar = (a,b) => a * b;

//Una funcion intemedia que recibe una funcion 
const sumaOmutltiplicar = fn => fn(10,20);


console.log(sumaOmutltiplicar(suma)); 
console.log(sumaOmutltiplicar(multiplicar )); 