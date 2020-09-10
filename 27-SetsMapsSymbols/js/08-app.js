const ciudades = ['Londres' , 'New York' , 'Madrid' , 'Paris'];
const ordenes = new Set([123,231,131, 102]);
const datos = new Map();

datos.set('Nombre' , 'Juan');
datos.set('Profesion', 'Desarrolllo web');

for (let entry of ciudades.entries())
{
    console.log(entry);
}

for (let entry of ordenes.entries())
{
    console.log(entry);
}

for (let entry of ordenes.entries())
{
    console.log(entry);
}

//enties no va imprimir una lleva si noe xiste nos imprimer llave y valor



//values  iterator 
for (let entry of ciudades.values())
{
    console.log(entry);
}
for (let entry of ordenes.values())
{
    console.log(entry);
}


//keys iterator 
for (let entry of ciudades.keys())
{
    console.log(entry);
}
for (let entry of ordenes.keys())
{
    console.log(entry);
}


//default 
for (let entry of ciudades)
{
    console.log(entry);
}
for (let entry of ordenes)
{
    console.log(entry);
}

//por default de map es el mismo se tare llave y valor 

