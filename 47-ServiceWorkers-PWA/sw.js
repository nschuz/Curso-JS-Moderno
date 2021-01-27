
//cuando se instala el service worker
self.addEventListener('install', e=>{
    console.log('Instalando el service worker');
    console.log(e);
});



//Activar el service worker
self.addEventListener('activate', e=>{
    console.log('Service worker activado');
    console.log(e);
});

//Evento fetch paara descragar arhivo estaticos 
self.addEventListener('fetch', e=>{
    console.log("Fetch..",e);
});