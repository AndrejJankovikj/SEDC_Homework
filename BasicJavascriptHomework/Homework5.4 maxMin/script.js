console.log("Hello there");

let arrayOfRandomNumbers = [521, 512, 7247, 12, 634, 235, 7871, 341345, 72, 723, 7666, 891];

function findTheNumbers(arrayOfRandomNumbers) {
    let biggestNumber = -Infinity;
    let smallestNumber = Infinity

    for (let i = 0; i < arrayOfRandomNumbers.length; i++) {
        if (arrayOfRandomNumbers[i] > biggestNumber) {
            biggestNumber = arrayOfRandomNumbers[i];
        }
        if (arrayOfRandomNumbers[i] < smallestNumber) {
            smallestNumber = arrayOfRandomNumbers[i];

        }


    }

    let sumOfMaxMin = biggestNumber + smallestNumber;
    return (biggestNumber, smallestNumber, sumOfMaxMin);





}

console.log(findTheNumbers(arrayOfRandomNumbers));



