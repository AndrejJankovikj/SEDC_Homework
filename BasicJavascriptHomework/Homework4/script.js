console.log("Hello world!");


function whatAmI(something) {

    let result = typeof (something);
    return result;
}

let firstResult = whatAmI(5);
let secondResult = whatAmI(5 <= 5);
let thirdResult = whatAmI("blabla");
let fourthResult = whatAmI(null);
let fifthResult = whatAmI();
console.log(firstResult);
console.log(secondResult);
console.log(thirdResult);
console.log(fourthResult);
console.log(fifthResult);

alert("boo");










