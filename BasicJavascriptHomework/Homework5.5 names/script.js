console.log("Hello");
let names = ["Andrej", "Ivan", "Goran", "Martin", "Mario"];
let surName = ["Jankovikj", "Stojanov", "Jankovski", "Mitikj", "Gulic"];

let arrayOfNames = [];

for (let i = 0; i < names.length; i++) {
    arrayOfNames.push(names[i] + " " + surName[i]);

}

console.log(arrayOfNames);


