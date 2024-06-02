import Calculator from './calculator';

// ============ Constants ============
const CALCULATOR = new Calculator()
const PREVIOUS = "previous"
const RESULT = "result"
const BASIC_OPERATIONS = ['+', '-', '*', '/']
const INITIAL_VALUE = 0


// ============ Variables ============
let currentOperation = []
let memoryResult = 0
let previousDisplay = document.getElementById(PREVIOUS)
let resultDisplay = document.getElementById(RESULT)


// ============ Functions ============
function initializeCalculator() {
    setCleanButtonListeners()
    setChangeSymbolListener()
    setNumbersListeners()
    setBasicOperationListener()
    setOperationListeners()
}

function setCleanButtonListeners() {
    document.querySelectorAll('.clean').forEach(button => {
        button.addEventListener('click', (e) => {
            e.target.id === '⌫' ? removeLast() : clearAll();
        });
    });
}

function clearAll() {
    updateDisplay('', INITIAL_VALUE);
    currentOperation = [];
    memoryResult = INITIAL_VALUE;
}

function removeLast() {
    let result = resultDisplay.value;
    if (result.length === 1) {
        updateDisplay('', INITIAL_VALUE);
    } else {
        updateDisplay('', result.slice(0, result.length - 1));
    }
}

function setChangeSymbolListener() {
    document.getElementById("+/-").addEventListener("click", () => {
        cleanDisplay()

        let result = resultDisplay.value

        if (result.charAt(0) !== '-') {
            resultDisplay.value = '-' + result
        } else {
            resultDisplay.value = result.slice(1, result.length)
        }
    })
}

function setNumbersListeners() {
    Array.from(document.getElementsByClassName("number")).forEach((element) => {
        element.addEventListener("click", (e) => {
            cleanDisplay()

            let currentValue = resultDisplay.value
            if (!memoryResult) {
                memoryResult = parseFloat(currentValue)
            }

            if ((currentValue === '0' || currentValue === '-0') && e.target.id !== '.') {
                resultDisplay.value = currentValue.replaceAll('0', e.target.id)
            } else {
                resultDisplay.value += e.target.id
            }
        })
    })
}

function cleanDisplay() {
    let previous = previousDisplay.value
    if (Array.from(previous).some((letter) => '=' === letter)) {
        memoryResult = 0
        previousDisplay.value = ''
        currentOperation = []
        resultDisplay.value = '0'
    }
}

function setBasicOperationListener() {
    document.getElementById("=").addEventListener("click", () => {
        if (!previousDisplay.value.includes('=') && currentOperation.length === 2 ) {
            const [visualOperation, result] = executeOperation();
            updateDisplay(visualOperation, result);
        }
    });
}

function setOperationListeners() {
    Array.from(document.getElementsByClassName("operation")).forEach((element) => {
        element.addEventListener("click", handleOperationClick);
    });
}

function handleOperationClick(e) {
    updateOperation();
    let num1 = getFirstValue();
    let operationSymbol = e.target.id;
    let isConcatOperation = currentOperation.length === 2 && BASIC_OPERATIONS.includes(operationSymbol);

    if (isConcatOperation) {
        handleConcatOperation(operationSymbol);
    } else {
        handleSpecialOperation(num1, operationSymbol);
    }
}

function getFirstValue() {
    return parseFloat(resultDisplay.value)
}

function handleConcatOperation(operationSymbol) {
    const [_, result] = executeOperation();
    updateDisplay(result + operationSymbol, 0);
    currentOperation.push(operationSymbol);
}

function handleSpecialOperation(num1, operationSymbol) {
    let result;
    let operationDisplay;

    if (operationSymbol === "√") {
        result = CALCULATOR.squareRoot(num1);
        operationDisplay = `√${num1} =`;
    } else if (operationSymbol === "e") {
        result = CALCULATOR.exponential(num1);
        operationDisplay = `e^${num1} =`;
    } else {
        result = 0;
        operationDisplay = `${currentOperation[0]}${operationSymbol}`;
        currentOperation.push(operationSymbol);
    }

    handleChainedOperation(result, operationDisplay, operationSymbol);
}

function handleChainedOperation(result, operationDisplay, operationSymbol) {
    if (!BASIC_OPERATIONS.includes(operationSymbol) && BASIC_OPERATIONS.includes(currentOperation[1])) {
        resultDisplay.value = result;
        let savedOperation = [currentOperation[0], currentOperation[1]];

        let [_, result2] = executeOperation();
        result = result2;
        operationDisplay = savedOperation[0] + savedOperation[1] + operationDisplay;
    } else if (result) {
        currentOperation = [result];
    }
    updateDisplay(operationDisplay, result);
}

function updateDisplay(previousOperation, result) {
    memoryResult = result;
    previousDisplay.value = previousOperation;
    resultDisplay.value = result;
}

function updateOperation() {
    // Add result data to the operation array if it's empty
    // It is for chained operations (Example 4+4 = 8+4)
    if (!currentOperation[0]) {
        currentOperation.push(resultDisplay.value)
    }
}


function executeOperation() {
    const [num1, operationSymbol, num2] = getOperationData();
    let result;

    switch (operationSymbol) {
        case "+": result = CALCULATOR.aggregation(num1, num2); break;
        case "-": result = CALCULATOR.subtraction(num1, num2); break;
        case "*": result = CALCULATOR.multiplication(num1, num2); break;
        case "/": result = CALCULATOR.division(num1, num2); break;
    }

    currentOperation = [result];

    const visualOperation = `${num1}${operationSymbol}${num2} =`;
    return [visualOperation, result];
}

function getOperationData() {
    // [num1, operationSymbol, num2]
    currentOperation.push(resultDisplay.value)
    return [parseFloat(currentOperation[0]), currentOperation[1], parseFloat(currentOperation[2])]
}

// ============ Initialize ============
initializeCalculator()