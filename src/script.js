// Code goes here
// See Readme

// Function for each operation
function add() {
  // Read values from the form
  let a = Number(document.getElementById("numA").value);
  let b = Number(document.getElementById("numB").value);

  // Calculate result + answer text
  let result = a + b;
  let answerText = `${a} + ${b} = ${result}`;

  // Display answer in the page
  document.getElementById("answer").innerHTML = answerText;
}

// see comments in add()
function subtract() {
  let a = Number(document.getElementById("numA").value);
  let b = Number(document.getElementById("numB").value);
  let result = a - b;

  let answerText = `${a} - ${b} = ${result}`;

  document.getElementById("answer").innerHTML = answerText;
}

function multiply() {
  let a = Number(document.getElementById("numA").value);
  let b = Number(document.getElementById("numB").value);
  let result = a * b;

  let answerText = `${a} * ${b} = ${result}`;

  document.getElementById("answer").innerHTML = answerText;
}

function divide(param) {
  let a = Number(document.getElementById("numA").value);
  let b = Number(document.getElementById("numB").value);
  let result = a / b;

  let answerText = `${a} / ${b} = ${result}`;

  document.getElementById("answer").innerHTML = answerText;
}
