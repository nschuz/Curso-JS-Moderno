//seleciconar elemntos por su clase , getElementByClassName

const header = document.getElementsByClassName('header');
console.log(header);

const hero = document.getElementsByClassName('hero');
console.log(hero);

//si las clases existen mas de 1 vez
const contenedores = document.getElementsByClassName('contenedor');
console.log(contedores); //regresa los elementos si en una o varios  

//si una clase no existe 
const noexiste = document.getElementsByClassName('no-existe');
console.log(noexiste); //Nos va regresa un html colection vacio  es como un arrgelo