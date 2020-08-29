const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

btnFlotante.addEventListener('click' , ()=>{
    if (footer.classList.contains('activo')) {
        footer.classList.remove('activo');
       this.btnFlotante.classList.remove('activo');
       
    }else{
        footer.classList.add('activo');
        btnFlotante.classList.add('activo');
        this.textContent='X-Cerrar';
    }
    
});