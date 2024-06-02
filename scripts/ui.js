import Calculator from './calculator';

// ============ Constants ============
const CALCULATOR = new Calculator()
const PREVIOUS = "previous"
const RESULT = "result"
const BASIC_OPERATIONS = ['+', '-', '*', '/']


// ============ Variables ============
let currentOperation = []
let memoryResult = 0
let previousDisplay = document.getElementById(PREVIOUS)
let resultDisplay = document.getElementById(RESULT)


// ============ Functions ============
function initializeCalculator() {
    setCleanButtonListeners()

    setBasicOperationsListener()
    setOperationListeners()
    setChangeSymbolListener()
    setNumbersListeners()
}

function setCleanButtonListeners() {
    document.querySelectorAll('.clean').forEach(button => {
        button.addEventListener('click', (e) => {
            e.target.id === '⌫' ? removeLast() : clearAll();
        });
    });
}

function setBasicOperationListener() {
    document.getElementById("=").addEventListener("click", () => {
        if (!previousDisplay.value.includes('=')) {
            const [visualOperation, result] = executeOperation();
            updateDisplay(visualOperation, result);
        }
    });
}

function setOperationListeners() {
    Array.from(document.getElementsByClassName("operation")).forEach((element) => {
        element.addEventListener("click", (e) => {
                updateOperation()
                let num1 = getFirstValue()
                let result
                let operationDisplay
                let operationSymbol = e.target.id
                let isConcatOperation = currentOperation.length === 2 && BASIC_OPERATIONS.includes(operationSymbol)

                if (isConcatOperation) {
                    const [_, result] = executeOperation()
                    updateDisplay(result + operationSymbol, 0)
                    currentOperation.push(operationSymbol)
                } else {
                    switch (operationSymbol) {
                        case "√":
                            result = CALCULATOR.squareRoot(num1)
                            operationDisplay = "√" + num1 + ' ='
                            break

                        case "e":
                            result = CALCULATOR.exponential(num1)
                            operationDisplay = "e^" + num1 + ' ='
                            break

                        default:
                            result = 0
                            operationDisplay = currentOperation[0] + operationSymbol
                            currentOperation.push(operationSymbol)
                            break
                    }

                    if (!BASIC_OPERATIONS.includes(operationSymbol) && BASIC_OPERATIONS.includes(currentOperation[1])) {
                        resultDisplay.value = result
                        let savedOperation = [currentOperation[0], currentOperation[1]]

                        let [_, result2] = executeOperation()
                        result = result2
                        operationDisplay = savedOperation[0] + savedOperation[1] + operationDisplay
                    } else if (result) {
                        currentOperation = [result]
                    }

                    if (!memoryResult) {
                        memoryResult = num1
                    }
                    updateDisplay(operationDisplay, result)
                }
            }
        )
    })
}

function updateOperation() {
    // Add result data to the operation array if it's empty
    // It is for chained operations (Example 4+4 = 8+4)
    if (!currentOperation[0]) {
        currentOperation.push(resultDisplay.value)
    }
}

function getFirstValue() {
    return parseFloat(resultDisplay.value)
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

    memoryResult = result;
    currentOperation = [result];

    const visualOperation = `${num1}${operationSymbol}${num2} =`;
    return [visualOperation, result];
}

function getOperationData() {
    // [num1, operationSymbol, num2]
    currentOperation.push(resultDisplay.value)
    return [parseFloat(currentOperation[0]), currentOperation[1], parseFloat(currentOperation[2])]
}

function updateDisplay(previousOperation, result) {
    previousDisplay.value = previousOperation
    resultDisplay.value = result
}


function setBasicOperationsListener() {
    document.getElementById("=").addEventListener("click", () => {
        if (!Array.from(previousDisplay.value).some((letter) => letter === '=')) {
            const [visualOperation, result] = executeOperation()
            updateDisplay(visualOperation, result)
        }
    })
}

function removeLast() {
    let result = resultDisplay.value
    previousDisplay.value = '';
    if (result.length === 1) {
        resultDisplay.value = 0
    } else {
        resultDisplay.value = result.slice(0, result.length - 1)
    }
}

function clearAll() {
    previousDisplay.value = ''
    resultDisplay.value = '0'
    currentOperation = []
    memoryResult = 0
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
        memoryResult = ''
        previousDisplay.value = ''
        currentOperation = []
        resultDisplay.value = '0'
    }
}


// ============ Initialize ============
initializeCalculator()