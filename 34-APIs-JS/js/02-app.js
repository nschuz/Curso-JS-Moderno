document.addEventListener('DOMContentLoaded', ()=>{
    const observer = new IntersectionObserver(entries =>{
        console.log(entries[0]);
        if (entries[0].isIntersecting){
            console.log('ya es visiable');
        }
    })

    observer.observe(document.querySelector('.premium'));
//va estar observadno todo  nos va reportando cada vez que esta visible 
})