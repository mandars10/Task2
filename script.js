let display = document.getElementById("result");

function appendValue(value) {
  display.value += value;
}

function clearResult() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    alert("Invalid Expression");
    clearResult();
  }
}
