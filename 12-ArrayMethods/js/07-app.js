const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ['Agosto' , 'Septiembre'];
const meses3 = ['Agosto' , 'Septiembre ' , 'Diciembre'];

//.concat 
const resultados = meses.concat(meses2 , meses3);
console.log(resultados);

//spread operator 
const resultado2 = [...meses, ...meses2 , ...meses3 , 'Otro meses'];
console.log(resultado2);
