// const calculatorContainer = document.querySelector("calculator-container")
const calculatorButtons = document.querySelectorAll(".calculator-btn")
const displayScreen = document.querySelector("#display-screen")
console.log(calculatorButtons)

let justPressedButton = 0;
let result = 0;
let display = 0;

let firstNum = "0";
let secondNum = "0";
let operator = "";

console.log(firstNum)

// calculatorButtons.forEach((btn) => btn.addEventListener("click", (event) => {displayScreen.innerText = event.target.innerText}))
calculatorButtons.forEach((btn) => btn.addEventListener("click", (event) => {handleClick(event)}))


const handleClick = (event) => {
        justPressedButton = event.target;
        handleFirstNumber();
        handleOperator();
        handleSecondNumber();
        handleEqual();
        handleAC();
        displayScreen.innerText = display
}

const handleFirstNumber = () => {
        if (justPressedButton.classList.contains("number") && operator === "") {
            // if it's 0 overwrite it with the number, otherwise we need to concatenate it
            if (firstNum === "0") {
                firstNum = justPressedButton.innerText
            } else {
                firstNum += justPressedButton.innerText
            }
            display = firstNum
        }
    }

const handleOperator = () => {
    if (justPressedButton.classList.contains("operator")) {
        operator = justPressedButton.innerText
        console.log(operator)
    }
}

const handleSecondNumber = () => {
    if (justPressedButton.classList.contains("number") && operator) {
        // if it's 0 overwrite it with the number, otherwise we need to concatenate it
        if (secondNum === "0") {
            secondNum = justPressedButton.innerText
        } else {
            secondNum += justPressedButton.innerText
        }
        display = secondNum
    }
}

const handleEqual = () => {
    if (justPressedButton.classList.contains("equals")) {
        console.log("calculating")
        result = doCalculation(+firstNum, +secondNum);
        display = Math.round(result * 10000000) / 10000000
        firstNum = result;
        operator = "";
        secondNum = "0";
    }
}

const handleAC = () => {
    if (justPressedButton.classList.contains("ac")) {
        justPressedButton = 0;
        result = 0;
        display = 0;

        firstNum = "0";
        secondNum = "0";
        operator = "";
    }
}


// const handleClick = () => {
//     if (lastPressedButton === 0) {

//     }
// }

// const handleNumberClick = () => {
//     if (lastPressedButton === )
// }


const getButtonContent = (event) => console.log(event.target.innerText)

// Functions for add, subtract, divide, plus
let addition = (a, b) => (Math.round((a * 1000) + (b * 1000))) / 1000;
let subtract = (a, b) => (Math.round((a * 1000) - (b * 1000))) / 1000;;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;

// Three variables for each, number one, operator, number two

// Function operate depending on the sign will perform an operation on number 1 and 2
let inputNum = "8"
// inputNum += //input

// Take first button store it
// Aggregate first number

let doCalculation = (a, b) => {
    if (operator === "+") {
        return addition(a, b) 
    } else if (operator === "-") {
        return subtract(a, b) 
    } else if (operator === "*") {
        return multiply(a, b) 
    } else if (operator === "/") {
        return divide(a, b) 
    } 
}
// Handle next button
// If it is another number then concat it

// If it is an operator prepare the equation and select the right one
console.log(doCalculation(firstNum, secondNum))

// Wait for the second number to be filled in
// If the user clicks any other operator then give an answer and take this as a for the next equation with the operator
// Else if its just equal sign output the answer and store it as a