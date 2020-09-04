//fechas  son de tipo objetos 

const diaHoy = new Date('1-7-2000');
const diaHoy2  = new Date();
let valor = diaHoy2;

valor.getFullYear();
valor.getMonth(); //enero es cero
valor.getMinutes();
valor.getHours();
valor.getTime();

console.log(valor);
console.log(Date.now());
console.log(new Date());
