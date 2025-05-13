function add(firstNum, secondNum) {
    return firstNum + secondNum;
}

function subtract(firstNum, secondNum) {
    return firstNum - secondNum;
}

function multiply(firstNum, secondNum) {
    return firstNum * secondNum;
}

function division(firstNum, secondNum) {
    if (secondNum !== 0) {
        return firstNum / secondNum;
    } else {
        return "Error! Division by zero.";
    }
}

function performOperation(operation) {
    const firstNum = parseFloat(document.getElementById("first-num").value);
    const secondNum = parseFloat(document.getElementById("second-num").value);
    let result;

    if (isNaN(firstNum) || isNaN(secondNum)) {
        result = "Please enter valid numbers.";
    } else {
        switch (operation) {
            case "add":
                result = add(firstNum, secondNum);
                break;
            case "subtract":
                result = subtract(firstNum, secondNum);
                break;
            case "multiply":
                result = multiply(firstNum, secondNum);
                break;
            case "division":
                result = division(firstNum, secondNum);
                break;
            default:
                result = "Invalid operation.";
        }
    }

    document.getElementById("result").innerText = `Result: ${result}`;
}
