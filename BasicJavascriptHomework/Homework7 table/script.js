console.log("Hi");
function table() {

    let numCol = parseInt(prompt("Enter the number of columns"))
    let numRow = parseInt(prompt("Enter the number of rows")) 
    let tableHtml = `<table border='1'>`;
    for (let i = 0; i <= numRow; i++) {
        tableHtml += `<tr>`;
        for (let j = 1; j <= numCol; j++) {
            tableHtml += `<td>`;
            tableHtml += "row-" + i + ",Column-" + j;
            tableHtml += `</td>`;
        }
        tableHtml += `</tr>`;

    }
    tableHtml += `</table>`;
    document.body.innerHTML = tableHtml;
}

table();