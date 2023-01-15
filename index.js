window.onload = function() {

var display = document.getElementById("display");
var lastButton = "";

function addValue(val) {
  if (lastButton === "operator") {
    display.value = display.value.slice(0, -1);
  }
  display.value += val;
  lastButton = typeof val;
}

function clearDisplay() {
  display.value = "";
  lastButton = "";
}

function calculate() {
  display.value = eval(display.value);
  lastButton = "";
}
}