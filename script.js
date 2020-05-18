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


// Calling the right math function based on operator.
function operate(operator, num1, num2) {
     if (operator === '+') {
         console.log(add(num1, num2));
     }
     else if (operator === '-') {
         console.log(subtract(num1, num2));
     }
     else if (operator === '*') {
         console.log(multiply(num1, num2));
     }
     else if (operator === '/') {
         console.log(divide(num1, num2));
     }
     else {
        console.log('Math function not supported or recognized.');
     }
}

// Test...
operate('/', 25, 2);