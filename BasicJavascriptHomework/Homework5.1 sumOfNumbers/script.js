console.log("Hi");
let arrayNumbers = [15, 20, 25, 30, 35];

function sumArray(someArray) {
    let sumOfNumbers = 0;
    for (let i = 0; i < someArray.length; i++) {
        sumOfNumbers += someArray[i];


    }
    return sumOfNumbers;


}
function validateNumber(someArray) {
    for (let i = 0; i < someArray.length; i++) {
        if (isNaN(someArray[i])) {
            alert("Not a number!");
            return false;
        }

    }
    console.log(sumArray(arrayNumbers));
    return true;

}
console.log(validateNumber(arrayNumbers));



