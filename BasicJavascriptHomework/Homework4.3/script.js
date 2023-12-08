console.log("Hello!");



// let ageToDrink = parseInt(prompt("Enter your age here."));
// let notOnBreak = parseInt(prompt("Is the bartender there?"));

// if ((ageToDrink >= 18) == true) {
//     // alert('You can drink');
// }
// else {
//     ageToDrink == false;
//     // alert("You can't Drink");
// }
function allowedToDrink(ageToDrink, notOnBreak) {

    let canYouDrink = (ageToDrink && notOnBreak);
    return canYouDrink;

}
// if (notOnBreak = true) {
//     alert("You can drink");

// }
// else {
//     notOnBreak = false;
//     alert("you can't drink"); 
// }

let canYouDrink1 = allowedToDrink(20, false);
let canYouDrink2 = allowedToDrink(25, true);
let canYouDrink3 = allowedToDrink(15, true);
console.log(canYouDrink1);
console.log(canYouDrink2);
console.log(canYouDrink3);
if (allowedToDrink(true, true)) {
    alert("You can drink")
}
else if (allowedToDrink(true, false)) {
    alert("You can't drink")
}
if (allowedToDrink(false, true)) {
    alert("You can't drink")
}
if (allowedToDrink(false, false)) {
    alert("You can't drink")
}


// let ageToDrink = parseInt(prompt("Enter your age here."))
// // let ageToDrink=18;
// let notOnBreak = parseInt(prompt("Is the bartender there?"))
// let notOnBreak = true;
// let canYouDrink = ageToDrink && notOnBreak;


