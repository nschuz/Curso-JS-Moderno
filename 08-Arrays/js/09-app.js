//DEstructuring arreglos 
//aaAqui si podemos decir el nombre
const numeros = [10,20,30,50,50,60];
const [primero] =numeros;

const [ , , , cuarto]= numeros;
const [primero , segundo , ...tercero]=numeros;

console.log(primero);
console.log(cuarto);