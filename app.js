let number1;
let number2;
let operation = "";

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(num1, num2, operator) {
    switch (operator) {
        case "addition":
            return add(num1, num2);
        case "subtraction":
            return subtract(num1, num2);
        case "multiplication":
            return multiply(num1, num2);
        case "division":
            return divide(num1, num2);
    }
}
