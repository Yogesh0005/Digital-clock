let currentNumber = "";
let previousNumber = "";
let operator = "";

function appendNumber(number) {
  currentNumber += number;
  document.getElementById("display").value = currentNumber;
}

function clearDisplay() {
  currentNumber = "";
  previousNumber = "";
  operator = "";
  document.getElementById("display").value = "";
}

function appendOperator(op) {
  if (currentNumber === "") {
    return; 
  }
  previousNumber = currentNumber;
  currentNumber = "";
  operator = op;
}

function calculate() {
  if (currentNumber === "" || operator === "") {
    return; 
  }
  let result = 0;
  const num1 = parseFloat(previousNumber);
  const num2 = parseFloat(currentNumber);
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        alert("Division by zero!");
        return;
      } else {
        result = num1 / num2;
      }
      break;
  }
  currentNumber = result.toString();
  previousNumber = "";
  operator = "";
  document.getElementById("display").value = currentNumber;
}
