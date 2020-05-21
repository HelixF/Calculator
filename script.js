// Initialize DOM elements
const displayValue = document.getElementById('calcDisplay');
const numberBtn = document.getElementsByClassName('numberBtn');
const clearBtn = document.getElementById('btnAC');
const plusBtn = document.getElementById('btnPlus');
const minusBtn = document.getElementById('btnMinus');
const multiplyBtn = document.getElementById('btnMultiply');
const divideBtn = document.getElementById('btnDivide');
const equalBtn = document.getElementById('btnEquals');

// Default display value on startup
displayValue.innerHTML = 0;

// Global variables
let operandOne = 0;
let operandTwo = 0;
let operatorSelected = 0;



// Define math functions.
function add(num1, num2) {
    let result = num1 + num2;
    return result;
}

function subtract(num1, num2) {
    let result = num1 - num2;
    return result;
}

function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}

function divide(num1, num2) {
    let result = num1 / num2;
    return result;
}


// Calling math function based on operator.
function operate(operator, num1, num2) {
     if (operator === '+') {
         return(add(num1, num2));
     }
     else if (operator === '-') {
         return(subtract(num1, num2));
     }
     else if (operator === '*') {
         return(multiply(num1, num2));
     }
     else if (operator === '/') {
         return(divide(num1, num2));
     }
     else {
        console.log('Math function not supported or recognized.');
     }
}

// Add event listeners to number buttons.
for (let i = 0 ; i < numberBtn.length ; i++) {
    numberBtn[i].addEventListener('click', () => {
        numberPressed(i);
    });
}

//Append numberBtn value to display.
function numberPressed(num) {

    // If OperandOne has been set before, clear display and let user enter second number.
    if (operandOne === displayValue.innerHTML) {
        displayValue.innerHTML = 0;
        displayValue.innerHTML += num;
        let output = parseInt(displayValue.innerHTML, 10);
        displayValue.innerHTML = output;
        return;
    }
    // Add the pressed number to display value.
    displayValue.innerHTML += num;
    // Remove leading zero and re-assign.
    let output = parseInt(displayValue.innerHTML, 10);
    displayValue.innerHTML = output;
}

// Clear all button.
clearBtn.addEventListener('click', ClearAll);

function ClearAll() {
    displayValue.innerHTML = 0;
    operandOne = 0;
    operandTwo = 0;
    operatorSelected = 0;
}


// Add event listeners to operator buttons
plusBtn.addEventListener('click' , operatorPressed);

function operatorPressed(){
    operandOne = displayValue.innerHTML;
    operatorSelected = plusBtn.innerHTML;
}

// Equal sign pressed.
equalBtn.addEventListener('click', evaluateMath);

function evaluateMath() {
    operandTwo = displayValue.innerHTML;

    let result = operate(operatorSelected, parseInt(operandOne), parseInt(operandTwo));
    displayValue.innerHTML = result;
    operandOne = result;
}





