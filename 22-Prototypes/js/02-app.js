function cliente (nombre , saldo){
    this.nombre = nombre;
    this.saldo= saldo;
}


const chuz = new cliente ('chuz' , 500);
console.log(chuz);

//creamos una funcion 
function formatearCliente (cliente){
    const {nombre , saldo} = cliente;
    return `El cliente ${nombre} tien de saldo: ${saldo}`;
}

function formatearEmpresa (empresa){
    const {nombre , saldo , categoria} =empresa;
    return `El cliente ${nombre} tien de saldo: ${saldo} y la categora ${categoria}`;
}

console.log(formatearCliente(chuz));

function Empresa (nombre , saldo , categoria){
    this.nombre = nombre,
    this.saldo= saldo,
    this.categoria= categoria;
}

const CCJ = new Empresa('Codigo con juan', 4000 , 'Cursos en liena');
console.log(formatearEmpresa(CCJ));