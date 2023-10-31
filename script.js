const inputText = document.getElementById("inputText");
const button = document.getElementById("processButton");
const outputText = document.getElementById("outputText");
const clearButton = document.getElementById("clearButton");

button.addEventListener("click", processInput);
clearButton.addEventListener("click", clear);

function processInput() {
    const input = inputText.value;
    const result = sql(input);
    outputText.value = result;
}

function sql(input) {
    var list = input.split('\n');
    var newList = [];

    for(var i = 0; i < list.length; i++) {
        newList.push("'"+list[i]+"'");
    }
    console.log(newList);
    return newList;
}


function clear() {
    inputText.value = "";
    outputText.value = "";
}