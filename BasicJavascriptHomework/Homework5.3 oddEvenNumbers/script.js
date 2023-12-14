console.log("Hellooo");

function oddAndEven() {
    let result = [];
    for (let i = 1; i < 21; i++) {
        if (i % 2 == 0) {
            result.push(i + "\n");


        }
        else {
            result.push(i + "");
        }

    }
    return result;


}
console.log(oddAndEven());






