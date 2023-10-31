const inputText = document.getElementById("inputText");
const button = document.getElementById("processButton");
const outputText = document.getElementById("outputText");
const clearButton = document.getElementById("clearButton");
const copyButton = document.getElementById("copyButton");

button.addEventListener("click", processInput);
clearButton.addEventListener("click", clear);
copyButton.addEventListener("click", copy);

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

function copy() {
    outputText.select(); 
    outputText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(outputText.value);
    
}