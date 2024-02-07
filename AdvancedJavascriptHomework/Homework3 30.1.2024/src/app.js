

async function fetchDocuments() {
    return fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response => response.json())
        .then(data => data)
        .catch(error => console.log(error))
}
async function fetchIdValue(values) {
    // Assuming you want to filter todos with an id greater than 1
    const filteredValues = values.filter((value) => value.id > 1);

    return new Promise((resolve, reject) => {
        if (filteredValues.length === 0) {
            reject("No todos with the needed id number");
        }

        setTimeout(() => {
            resolve(filteredValues);
        }, 0);
    });
}
async function checkIdValue(value) {
    if (value.length === 0) {
        throw new Error("No todos with the needed id number");
    }
}

async function showIdValues(values) {
    values.forEach((value) => console.log(`Todo ID: ${value.id}`));
}

async function showNeededIdValues() {
    try {
        const allTodos = await fetchDocuments();
        checkIdValue(allTodos);
        const filteredTodos = await fetchIdValue(allTodos);
        showIdValues(filteredTodos);
    }
    catch (error) {
        console.error("Error:");

    }
}
showNeededIdValues();





