//iife
//las variables y todo dentro de esa funcion solo pueden ser utilizadas ahi 

(function (){
let DB;
    document.addEventListener('DOMContentLoaded', ()=>{
    creaDB();        
    });

    //crea la base de datos indexDB 
    function creaDB (){
        
        //creamos la base abrimos una conexion
        const crearDB = window.indexedDB.open('crm',1);
        crearDB.onerror = function (){
            console.log('Hubo un error');
        }

        crearDB.onsuccess = function (){
            DB= crearDB.result;
        }

        //solo se ejcuta una vez cuando se crea. permite crear las tablas
        crearDB.onupgradeneeded= function (e){
            const db= e.target.result;

            const objectStore=db.createObjectStore('crm' ,{keyPath:'id' , autoIncrement: true});

            objectStore.createIndex('nombre', 'nombre', {unique: false});
            objectStore.createIndex('email',  'email', {unique:  true});
            objectStore.createIndex('telefono', 'telefono', {unique: false});
            objectStore.createIndex('empresa', 'empresa', {unique: false});
            objectStore.createIndex('id', 'id', {unique: false});
            
            console.log('base creada');
        }        
    }


})();