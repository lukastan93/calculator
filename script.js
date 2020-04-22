const display = document.querySelector('.display');
let operand1 = null;
let operand2 = null;
let operator = null;
let equalsPressed = 0;

let buttons = document.querySelectorAll('.number-button');
buttons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        if (equalsPressed === 0){
            display.textContent += event.target.innerHTML;
        }
        else{
            display.textContent = event.target.innerHTML;
            equalsPressed = 0;
        }
    })
})

const clearButton = document.querySelector('.clear-button').onclick = clearAll;
function clearAll(){
    display.textContent = "";
    operand1 = null;
    operand2 = null;
    operator = null;
}

function clearDisplay(){
    display.textContent = "";    
}

const divideButton = document.querySelector('.divide').onclick = pressDivide;
function pressDivide(){
    let displayValue = parseInt(display.textContent, 10);
    if (operator === "-" || operator === "+" || operator === "*"){
        operand1 = operate(operand1 , displayValue, operator);
    }
    else{
        if(operand1 && display.textContent){
            operand1 = divide(operand1 , displayValue);
        }
        else operand1 = parseInt(display.textContent, 10);
    }
    operator = '/';
    clearDisplay();
}

const multiplyButton = document.querySelector('.multiply').onclick = pressMultiply;
function pressMultiply(){
    let displayValue = parseInt(display.textContent, 10);
    if (operator === "-" || operator === "/" || operator === "+"){
        operand1 = operate(operand1 , displayValue, operator);
    }
    else{
        if(operand1 && display.textContent){
            operand1 = multiply(operand1 , displayValue);
        }
        else operand1 = parseInt(display.textContent, 10);
    }
    operator = '*';
    clearDisplay();
}

const subtractButton = document.querySelector('.subtract').onclick = pressSubtract;
function pressSubtract(){
    let displayValue = parseInt(display.textContent, 10);
    if (operator === "+" || operator === "/" || operator === "*"){
        operand1 = operate(operand1 , displayValue, operator);
    }
    else{
        if(operand1 && display.textContent){
            operand1 = subtract(operand1 , displayValue);
        }
        else operand1 = parseInt(display.textContent, 10);
    }
    operator = '-';
    clearDisplay();
}

const addButton = document.querySelector('.add').onclick = pressAdd;
function pressAdd(){
    let displayValue = parseInt(display.textContent, 10);
    if (operator === "-" || operator === "/" || operator === "*"){
        operand1 = operate(operand1 , displayValue, operator);
    }
    else{
        if(operand1 && display.textContent){
            operand1 = add(operand1 , displayValue);
        }
        else operand1 = parseInt(display.textContent, 10);
    }
    operator = '+';
    clearDisplay();
}

const equalsButton = document.querySelector('.equals').onclick = pressEquals;
function pressEquals(){
    operand2 = parseInt(display.textContent, 10);
    if (operand1){
    display.textContent = operate(operand1 , operand2, operator);
    }
    else display.textContent = `${operand2}`
    operand1 = null;
    operand2 = null;
    operator = null;
    equalsPressed = 1;
}

function add(a , b){
    return a + b;
}

function subtract(a , b){
    return a - b;
}

function multiply(a , b){
    return a * b;
}

function divide(a , b){
    return((b === 0) ? 'DONKEY' : (a / b));
}

function operate(a , b , mod){
    switch (mod){
        case '+':
            return add (a, b);
            break;
        case '-':
            return subtract(a, b);
            break;
        case '*':
            return multiply(a, b);
            break;
        case '/':
            return divide(a, b);
            break;
    }
}