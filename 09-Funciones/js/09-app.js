const reproducir ={
    nombre: function(id){
        console.log(`Reproduciendo cacion con el id ${id}`);
    },
    pausar: function (){
        console.log(`Pausando...`);
    },
    crearPalylist: function (nombre) {
        console.log(`PlayList creada ${nombre}`);
    }
}
reproducir.nombre(30);
reproducir.pausar();
reproducir.crearPalylist('techno');

