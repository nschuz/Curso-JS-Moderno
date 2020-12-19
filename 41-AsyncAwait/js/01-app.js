//se usa mucho try cath con async wait

console.log(1+1);
try {
    hola(); //Aqui se rompepero si ponemos un try sigue
} catch(error){
    console.log(error);
}
console.log(2+2);

//usar try en apis , bases de datos para 