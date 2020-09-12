const notificacionBtn = document.querySelector('#notificar');

notificacionBtn.addEventListener('click',()=>{

    Notification
        .requestPermission()
        .then(result => {
            console.log('Rrsultado: ' ,result);
        })

});


const vernotificacion =document.querySelector('#verNotificacion');
vernotificacion.addEventListener('click', ()=>{
    if(Notification.permission==='granted'){
      const notificacion =  new Notification('Nueva notificacion', {
            icon: 'img/ccj.png',
            body: 'Aprende con proyectos',
        });
        notificacion.onclick= function (){
            window.open('https://www.google.com');
        }
    }
});