document.addEventListener('visibilitychange' ,()=>{
    console.log(document.visibilityState);
    if(document.visibilityState==='visible'){
        console.log('ejecuta esto')
    }else{
        console.log('pausa el video');
    }
})