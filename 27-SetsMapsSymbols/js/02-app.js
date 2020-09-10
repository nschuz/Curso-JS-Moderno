// weakset 
//la unica difrencia solo podemos agrgar obejtos 

const weakset = new Weakset();

const cliente = {
    nombre: 'chuz',
    saldo :1000,
}

weakset.add(cliente);

console.log(weakset);
console.log(weakset.has(cliente));

//no tiene punto size
//no son iterables 
