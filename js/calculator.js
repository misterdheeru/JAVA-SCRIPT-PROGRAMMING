var operation = document.getElementById("operation");

function appendValue(value) {
  operation.innerText += value;
}

function clearOperation() {
  operation.innerText = "";
}

function calculate() {
  operation.innerText = eval(operation.innerText);
}