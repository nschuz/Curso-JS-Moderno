let DB;
document.addEventListener ('DOMContentLoaded' , ()=>{
    crmDB();

    setTimeout(() => {
        crearCliente();
    }, 5000);

})

function crmDB(){

    //crear base de datos version 1.0
    let crmDB = window.indexedDB.open('crm',1);

    //si hay un error 
    crmDB.onerror= function (){
        console.log('HUBO UN ERROR');
    }


    //SI SE CREO bien 
    crmDB.onsuccess = function (){
        console.log("BASE DE DATOS CREADA");
        DB=crm.result;
    }

    //configuracion de la base de datos
    //se ejecuta una vez solamnte  una vez que se ccrea 
    crmDB.onupgradeneeded= function(e){ 
        console.log(e.target.result);
        const db = e.target.result; //usamos ventos 
        const objectStore=db.createObjectStore('crm' ,{
            keyPath: 'crm',
            autoIncrement: true

        });
        objectStore.createIndex('nombre' , 'nombre' ,{unique: true});
        objectStore.createIndex('email' , 'email' ,{unique: false}); //fasle indica que no puede existir un emial identicio soe solo 1
        objectStore.createIndex('telefono' , 'telefono' ,{unique: false });

        console.log('columnas creadas');
    }

}

function crearCliente(){
        let transaction = DB.transaction(['crm'] , 'readwrite');
        transaction.oncomplete = function (){
            console.log('transaccion completa')
        }

        transaction.onerror= function(){
            console.log('Hubo un erro en la trasaccion');
        }

        const objectStore= transaction.objectStore('crm');
        const nuevoCliente ={
            telefono: 10218313,
            nombre: 'chuz',
            email: 'chua@hotmail.com'
        }

        const peticion = objectStore.add(nuevoCliente);
        console.log(peticion);
//
    }

//debemos usar transacciones en indexedb
//una trsaccion revisa los pasos que se cumolan 
//ejemplo cajero revisa si teiens dinero , lo resta 