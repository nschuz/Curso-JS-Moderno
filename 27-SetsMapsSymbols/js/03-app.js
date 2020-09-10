//mpas listas ordenadas  en llave y valor 

const cliente = new Map();

cliente.set('nombre' , 'Chuz');
cliente.set('email' , 'chuz@');
cliente.set(true , true);

console.log(cliente);
console.log(cliente.size);
console.log(cliente.get('nombre'));
console.log(cliente.has('nombre'));
cliente.delete('saldo');


const paciente = new Map ([['nombre' , 'chuz'],[ 'cuarto' ,'100']]);
console.log(paciente);