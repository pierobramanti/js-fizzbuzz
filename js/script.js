// INSERISCO CICLO FOR//
for (let i = 1; i <= 100; i++){

// INSERISCO LA CONDIZIONE DIVISIBILE PER 3 e PER 5//
if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz")
// INSERISCO LA CONDIZIONE DIVISIBILE PER 3//
}
else if (i % 3 === 0){
    console.log("Fizz")
}
// INSERISCO LA CONDIZIONE DIVISIBILE PER 5// 
else if( i % 5 === 0){
    console.log("Buzz")
}
// INSERISCO LA CONDIZIONE DIVISIBILE PER I RESTANTI NUMERI// 
else {
    console.log(`${i}`)
}
}
