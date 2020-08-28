//traversion del dom 
//Recorrer el doom 

const navegacion = document.querySelector('.navegacion');
console.log(navegacion);
console.log(navegacion.childNodes);//Los espacions en blacos son considerados en blanco 
//como los puentos en blanco 

//Es por esos tenemos una solucion children 

console.log(navegacion.children[1].nodeName); 
console.log(navegacion.children[1].nodeType);

const card = document.querySelector('.card');
console.log(card.children[1].children[1].textContent);
card.children[1].children[1].textContent='Nuevo heading desde traversing the dom';



