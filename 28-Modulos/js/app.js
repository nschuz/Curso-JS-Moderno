


///usamos import
import {nombreCliente , ahorro , mostarInformacion , Cliente} from './cliente.js';

//en la liberia no usmaos extension porque usan webpack 
//aqui manuelmnte si debemos usar 
//en el html debemos colocar la etiqueta type="module"
console.log(nombreCliente);
console.log(ahorro);

console.log(mostarInformacion(nombreCliente, ahorro));

const cliente = new Cliente('chuz' , 2000);


//importar emepresa 
import nueva  , {Empresa} from './empresa.js';
console.log(Empresa);

//expor default  no va entre llevas 
console.log(nueva());
