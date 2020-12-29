

//Object constrcur


const ObtenerNombre = info => ({

    mostarNombre(){
        console.log(`Nombre: ${info.nombre}`);
    }

});

//fucion dentor
const guardarEmail = info  => ({

    agregarEmail(email){
        console.log(`Guarado email en : ${info.nombre}`);
        info.email=email;
    }

});


const obtenerEmail = info => ({

    mostrarEmail (){
        console.log(`Email: ${info.email}`);
    }
});


function Cliente (nombre , email , empresa){
 let info ={
     nombre, 
     email, 
     empresa
 }

 return Object.assign(
     info,
     ObtenerNombre(info),
     guardarEmail(info),
     obtenerEmail(info)
     )

}

function Empleado ( nombre , email , puesto){
let info ={
    nombre , 
    email, 
    puesto
}


return Object.assign(
    info,
    ObtenerNombre(info),
    guardarEmail(info),
    obtenerEmail(info)
    )

}

const cliente1 = Cliente('Juan', null, 'Codigo con juan');
cliente1.mostarNombre();
cliente1.agregarEmail('Cl@cliente@');
cliente1.mostrarEmail();

const empleado1 = Empleado ('Pedro', null, 'Programador');
empleado1.mostarNombre();
empleado1.agregarEmail('AgregarEmail@gail.com');
empleado1.mostrarEmail();