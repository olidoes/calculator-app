let preOperationNumber = 0;
let postOperationNumber = 0;
let currentOperation = "";

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

function click_handler(id) {
    if (id.includes("number")) {
        if (currentOperation === "") {
            if (preOperationNumber === 0) {
                preOperationNumber = Number(id.substring(7));

                document.getElementById("answer-display").innerText =
                    preOperationNumber;
            } else if (preOperationNumber > 0) {
                let latestNumberClicked = Number(id.substring(7));
                let newNumber =
                    String(preOperationNumber) + String(latestNumberClicked);

                document.getElementById("answer-display").innerText = newNumber;

                preOperationNumber = Number(newNumber);
            }
        } else {
            if (postOperationNumber === 0) {
                postOperationNumber = Number(id.substring(7));

                document.getElementById("answer-display").innerText =
                    postOperationNumber;
            } else if (postOperationNumber > 0) {
                let latestNumberClicked = Number(id.substring(7));
                let newNumber =
                    String(postOperationNumber) + String(latestNumberClicked);

                document.getElementById("answer-display").innerText = newNumber;

                postOperationNumber = Number(newNumber);
            }
        }
    } else if (id.includes("equals")) {
        let total = operate(
            preOperationNumber,
            postOperationNumber,
            currentOperation,
        );

        document.getElementById("answer-display").innerText = total;

        preOperationNumber = 0;
        postOperationNumber = 0;
        currentOperation = "";
    } else if (
        id === "addition" ||
        id === "subtraction" ||
        id === "multiplication" ||
        id === "division"
    ) {
        currentOperation = id;
        document.getElementById("answer-display").innerText = "0";
    }
}
