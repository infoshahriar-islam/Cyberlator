let input = '';

let output = '';

let operator;

function append(value) {

  input += value;

  document.getElementById('result').value = input;

}

function clearAll() {

  input = '';

  output = '';

  operator = undefined;

  document.getElementById('result').value = '';

}

function backspace() {

  input = input.slice(0, -1);

  document.getElementById('result').value = input;

}

function operation(op) {

  operator = op;

  output = input;

  input = '';

}

function calculate() {

  let result;

  const num1 = parseFloat(output);

  const num2 = parseFloat(input);

  if (isNaN(num1) || isNaN(num2)) {

    return;

  }

  switch (operator) {

    case '+':

      result = num1 + num2;

      break;

    case '-':

      result = num1 - num2;

      break;

    case '*':

      result = num1 * num2;

      break;

    case '/':

      result = num1 / num2;

      break;

    default:

      return;

  }

  input = result.toString();

  operator = undefined;

  output = '';

  document.getElementById('result').value = input;

}

