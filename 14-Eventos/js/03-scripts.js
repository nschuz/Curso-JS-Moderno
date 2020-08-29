const busqueda = document.querySelector('.busqueda');

busqueda.addEventListener('keyup', ()=>{

    console.log('Escribiendo.....');
});


busqueda.addEventListener('keydown', ()=>{

    console.log('Escribiendo.....');
});

busqueda.addEventListener('copy', ()=>{

    console.log('Escribiendo.....');
});

busqueda.addEventListener('cut', ()=>{

    console.log('Escribiendo.....');
});

busqueda.addEventListener('paste', ()=>{

    console.log('Escribiendo.....');
});

busqueda.addEventListener('input', (e)=>{
    console.log(e.type); //sobre que elemneto estamos trabajando
    console.log(e.target.value); //lo que el usuario esta escribiendo
    
});