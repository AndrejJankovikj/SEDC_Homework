console.log("Helloo");

let moneyInAccount = 30000;
let moneyWithdraw = parseInt(prompt("How much money would you like to withdraw?"));

function cashMoney(moneyInAccount, moneyWithdraw) {
    let result = moneyInAccount - moneyWithdraw;
    return result;


}

let result1 = cashMoney(moneyInAccount, moneyWithdraw)




if (result1 > 0) {
    alert(`You have withdrawed ${moneyWithdraw} and you still have ${result1} left in your bank account!`);

}
else {
    alert(`You only have ${moneyInAccount} in your bank account!!`)

}





