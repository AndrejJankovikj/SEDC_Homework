console.log("Hellooo");

let someArray = [14, 15, 17, 21, 28, 93, 54, 89];

function arrayInHtml(array) {
    let items = " ";
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        items += `<li>${array[i]}</li>`;
        sum += array[i]

    }
    return [items, sum];

}
let sum = 0;

document.querySelector("div").innerHTML = `
<ol>
${arrayInHtml(someArray)}
</ol>
`;





