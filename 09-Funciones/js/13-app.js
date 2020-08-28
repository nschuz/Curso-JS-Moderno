const reproducir ={
    nombre: id =>{
        console.log(`Reproduciendo cacion con el id ${id}`);
    },
    pausar: ()=>{
        console.log(`Pausando...`);
    },
    crearPalylist:nombre=> {
        console.log(`PlayList creada ${nombre}`);
    }
}
reproducir.nombre(30);
reproducir.pausar();
reproducir.crearPalylist('techno');

