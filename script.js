
let displayValue = '';

function appendToDisplay(value) {
  displayValue += value;
  document.getElementById('display').value = displayValue;
}

function calculate() {
  try {
    if (displayValue.includes('√')) {
      const squareRootIndex = displayValue.indexOf('√');
      const operandIndex = squareRootIndex + 1;

      let countBrackets = 0;
      let i;
      for (i = operandIndex; i < displayValue.length; i++) {
        if (displayValue[i] === '(') {
          countBrackets++;
        } else if (displayValue[i] === ')') {
          if (countBrackets === 0) break;
          countBrackets--;
        }
      }

      const operand = displayValue.slice(operandIndex, i);
      const result = Math.sqrt(eval(operand));

      displayValue = displayValue.replace(`√${operand}`, result);
      document.getElementById('display').value = displayValue;
      return;
    }

    const result = eval(displayValue);
    document.getElementById('display').value = result;
    displayValue = result.toString();
  } catch (error) {
    document.getElementById('display').value = 'Error';
    displayValue = '';
  }
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('display').value = '';
}

function backspace() {
  displayValue = displayValue.slice(0, -1);
  document.getElementById('display').value = displayValue;
}
