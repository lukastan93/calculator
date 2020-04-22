const display = document.querySelector('.display');
let operand1 = null;
let operand2 = null;
let operator = null;

const zeroButton = document.querySelector('.zero').onclick = pressZero;
function pressZero(){
    display.textContent += '0';
}

const oneButton = document.querySelector('.one').onclick = pressOne;
function pressOne(){
    display.textContent += '1';
}

const twoButton = document.querySelector('.two').onclick = pressTwo;
function pressTwo(){
    display.textContent += '2';
}

const threeButton = document.querySelector('.three').onclick = pressThree;
function pressThree(){
    display.textContent += '3';
}

const fourButton = document.querySelector('.four').onclick = pressFour;
function pressFour(){
    display.textContent += '4';
}

const fiveButton = document.querySelector('.five').onclick = pressFive;
function pressFive(){
    display.textContent += '5';
}

const sixButton = document.querySelector('.six').onclick = pressSix;
function pressSix(){
    display.textContent += '6';
}

const sevenButton = document.querySelector('.seven').onclick = pressSeven;
function pressSeven(){
    display.textContent += '7';
}

const eightButton = document.querySelector('.eight').onclick = pressEight;
function pressEight(){
    display.textContent += '8';
}

const nineButton = document.querySelector('.nine').onclick = pressNine;
function pressNine(){
    display.textContent += '9';
}

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
    operand1 = parseInt(display.textContent, 10);
    operator = 'divide';
    clearDisplay();
}

const multiplyButton = document.querySelector('.multiply').onclick = pressMultiply;
function pressMultiply(){
    operand1 = parseInt(display.textContent, 10);
    operator = 'multiply';
    clearDisplay();
}

const subtractButton = document.querySelector('.subtract').onclick = pressSubtract;
function pressSubtract(){
    operand1 = parseInt(display.textContent, 10);
    operator = 'subtract';
    clearDisplay();
}

const addButton = document.querySelector('.add').onclick = pressAdd;
function pressAdd(){
    operand1 = parseInt(display.textContent, 10);
    operator = 'add';
    clearDisplay();
}

const equalsButton = document.querySelector('.equals').onclick = pressEquals;
function pressEquals(){
    operand2 = parseInt(display.textContent, 10);
    switch (operator){
        case 'divide':
            display.textContent = divide(operand1 , operand2);
            operator = 'equals'
            break;
        case 'multiply':
            display.textContent = multiply(operand1 , operand2);
            operator = 'equals'
            break;
        case 'subtract':
            display.textContent = subtract(operand1 , operand2);
            operator = 'equals'
            break;
        case 'add':
            display.textContent = add(operand1 , operand2);
            operator = 'equals'
            break;
        case 'equals':
            break;
        default: break;
    }
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
    return a / b;
}

function operate(operand1 , operand2 , operator){
    switch (operator){
        case '+':
            return add (operand1, operand2);
            break;
        case '-':
            return subtract(operand1, operand2);
            break;
        case '*':
            return multiply(operand1, operand2);
            break;
        case '/':
            return divide(operand1, operand2);
            break;
    }
}