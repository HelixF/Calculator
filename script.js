// Asaign caluclator display variable.
const displayValue = document.getElementById('calcDisplay');


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

// Add event listeners to number buttons.
let numberBtn = document.getElementsByClassName('numberBtn');

for (let i = 0 ; i < numberBtn.length ; i++) {
    numberBtn[i].addEventListener('click', () => {
        numberPressed(i);
    });
}

// Append numberBtn value to display.
// function numberPressed(num) {
//     if ((displayValue.innerText = '0') || (displayValue.innerText = 0)) {
//         displayValue.innerText = num;
//     }
//     displayValue.innerText = displayValue.innerText + num;
   
//     console.log(displayValue.innerText);
// }






