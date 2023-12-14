console.log("Helloooo");

stringsArray = ["Hello", "there", "students", "of", "SEDC", "!"];
function bigString(someArray) {
    let result = "";
    for (i = 0; i < someArray.length; i++) {
        result += someArray[i] + " ";

    }
    return result

}
console.log(bigString(stringsArray));



