//Implicit Binding
//de forma en que parte del objeto  estamos usando this para obtener ssu valores 
const usuario ={
    nombre:"chuz",
    edad: 20,
    informacion (){
        console.log(`Mi nombre es : ${this.nombre} , y mi edad es : ${this.edad}`);
    },
    mascota:{
        edad: 1,
        nombre: "hook",
        informacion (){
            console.log(`Mi nombre es : ${this.nombre} , y mi edad es : ${this.edad}`);
        },
    }
}
usuario.informacion();
usuario.mascota.informacion();