//Fizz Buzzz
// 3 ,  6 9 12 ..fizz
// 5 10 15 20 ... buzz
// 15 30 45 ... fizbuzz

for(let i=1; i<=100; i++){
    if(i%15===0){
        console.log(`${i}  Fizzz Buzz`);
    }else if(i%3===0){
        console.log(`${i} Fizz`);
    }else if(i%5===0){
        console.log(`${i} Buzz`);
    }
    //va inicio %15 porque es la menos comun pero es la primera que se debe ejcutar
}