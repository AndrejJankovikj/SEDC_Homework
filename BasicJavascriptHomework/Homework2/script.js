console.log("Hello from JavaScript!");











let priceOfPhone = 119.5;
let ammount = 30;
let taxRate = 5;
let priceWithTax = priceOfPhone + (priceOfPhone / 100 * taxRate);
console.log(priceWithTax)


let priceOfAllPhones = (priceOfPhone * ammount) + (priceOfPhone * ammount / 100 * taxRate);
console.log(priceOfAllPhones);









function converterFromMpgToLKm(valueInMpg) {
    let result =  235.21/ valueInMpg ;
    return result;


}

let firstResult = converterFromMpgToLKm(50);
let secondResult = converterFromMpgToLKm(25);
console.log(firstResult);
console.log(secondResult);


function converterFromKmToMpg(valueInKm){
let rezultat = 282.5 / valueInKm;
return rezultat;


}
let thirdResult = converterFromKmToMpg(12);

console.log(thirdResult);










