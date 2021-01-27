//mediator / mediador
function Vendedor (nombre){
this.nombre = nombre;
this.sala=null;

}

Vendedor.prototype={
    oferta:(articulos , precio)=>{
        console.log(`Tenemos el siguinete articulo ${articulos} , iniciamos en precio ${precio}`);
    },
    vendido:comprador =>{
        console.log(`Vendido a ${comprador}`);
    }
}

function Comprador(nombre){
    this.nombre = nombre;
    this.sala=null;


}
Comprador.prototype={
    oferta:(cantidad , comprador)=>{
        console.log(`${comprador}: ${cantidad}`);
    }
}

function Subasta(){
    let compradores={

    };
    return {
        registrar: usuario =>{
            compradores[usuario.nombre]=usuario;
            usuario.sala=this;
        }
    }

}




//Crear objetos
const juan=new Comprador('Juan');
const pablo=new Comprador('Pablo');
const vendedor= new Vendedor('Vendedor de Autos');
const subasta= new Subasta();

//Tienes que registrarlos
subasta.registrar(juan);
subasta.registrar(pablo);
subasta.registrar(vendedor);


vendedor.oferta("Mustang 60",300 );
juan.oferta(350,juan);
pablo.oferta(450,pablo);
juan.oferta(550,juan);
pablo.oferta(650,pablo);

vendedor.vendido("chuz");
