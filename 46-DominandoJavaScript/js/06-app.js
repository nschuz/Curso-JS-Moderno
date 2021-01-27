//New Biding
function Auto (modelo , color){
this.color=color;//este el biding
this.modelo=modelo;
}
//object constructor
const auto1= new Auto('camaro', 'rojo');
console.log(auto1);


//Window Biding
//js busca primero algo asi const color y depsues se va  a la ventana global 
window.color='negro';
function hola(){
    console.log(color);
}
hola();