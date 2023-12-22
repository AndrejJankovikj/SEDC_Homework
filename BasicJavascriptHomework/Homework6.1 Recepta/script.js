console.log("Hello");


let recept = prompt("Enter the name of the recipe");
let sostojki = (parseInt(prompt("How many ingredients do you need for it?")));
let nameOfIngredients = []
let firstDiv = document.getElementById("recipe");
let secondDiv = document.getElementById("ingredients");
for (let i = 0; i < sostojki; i++) {
    let ing = prompt("Put in ingredient" + (i + 1) + ":");
    nameOfIngredients.push(ing);
}

firstDiv.innerHTML =
    `<h1>The recipe is ${recept} and for that we need ${sostojki} ingredients </h1>
    <h2>The ingredients are : </h2><br>`

document.write("<ul>");
for (let j = 0; j < nameOfIngredients.length; j++) {
    document.write("<li>" + nameOfIngredients[j] + "</li>")
}
document.write("</ul");

// koristev pomos od google za ova


