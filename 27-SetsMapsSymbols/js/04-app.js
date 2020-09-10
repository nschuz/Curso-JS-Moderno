const producto ={
    id :10
}

const weakMap = new WeakMap();
weakMap.set(producto ,'Monitor');
console.log(weakMap);

console.log(weakMap.get(producto));
console.log(weakMap.has(producto));
console.log(weakMap.dele(producto));



//no se pueden iterar 
//no puedo obtener su extension con .size
//solo acepta objeto 