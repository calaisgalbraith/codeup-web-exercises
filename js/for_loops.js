"use strict";
console.log("For Loop Exercises");

//exercise 2 //DONE
function showMultiplicationTable(input) {
    for(let i = 1; i < 11; i++) {
        console.log(input + " x " + i + " = " + input * i);
    }
}

//exercise 3 // DONE
console.log("Exercise 3");

for(let x = 1; x < 11; x++) {
    var RandomNumber = Math.floor(Math.random() * (200-20) +20);
    if(RandomNumber % 2 == 0) {
        console.log(RandomNumber + " is even");
    }
    else {
        console.log(RandomNumber + " is odd");
    }
}

//exercise 4: DONE
console.log("");
console.log("Exercise 4")

for(let i = 1; i < 10; i++) {
    var a = i.toString();
    console.log(a.repeat(i))
}

//exercise 5 // DONE
console.log("");
console.log("Exercise 5")

for(var w = 100; w >= 5; w -= 5) {
    console.log(w);
}