var display = document.getElementById("display");
var firstOperand = "";
var operator = "";
var secondOperand = "";
var result;

function addValue(val) {
  if (operator === "") {
    firstOperand += val;
    display.value = firstOperand;
  } else {
    secondOperand += val;
    display.value = secondOperand;
  }
}

function addOperator(op) {
  if (firstOperand !== "") {
    operator = op;
    display.value = operator;
  }
}


