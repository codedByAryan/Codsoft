// This variable will store what the user types
let currentInput = "";

// This function adds a value (number or operator) to the input
function appendValue(value) {
  currentInput = currentInput + value;
  updateDisplay();
}

// This function clears everything from the input
function clearDisplay() {
  currentInput = "";
  updateDisplay();
}

// This function deletes the last character from the input
function deleteLast() {
  // Remove the last character
  currentInput = currentInput.slice(0, currentInput.length - 1);
  updateDisplay();
}

// This function calculates the result
function calculate() {
  // Try to calculate the result
  try {
    // Use eval to calculate (for beginners, but not recommended for big projects)
    let result = eval(currentInput);
    currentInput = result.toString();
    updateDisplay();
  } catch (error) {
    // If there is an error, show "Error"
    currentInput = "Error";
    updateDisplay();
  }
}

// This function updates the display box
function updateDisplay() {
  document.getElementById("display").value = currentInput;
}