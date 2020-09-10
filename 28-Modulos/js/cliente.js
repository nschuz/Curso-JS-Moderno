export  const nombrecliente  =  'Chuz';
export  const ahorro  =  2000;

export function mostarInformacion(nombre , ahorro) {
    return `Cliente : ${nombre} - Ahorro: ${ahorro}`;
}

export class Cliente {
    constructor(nombre , ahorro){
        this.nombre= nombre;
        this.ahorro=ahorro;
    }
}

export default function nueva (){
    console.log('expor defautl');
}