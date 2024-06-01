import Calculator from './calculator';

// ============ Constants ============
const CALCULATOR = new Calculator()
const PREVIOUS = "previous"
const RESULT = "result"
const BASIC_OPERATIONS = ['+', '-', '*', '/']


// ============ Variables ============
let operation = []
let memoryResult = 0
let previousDisplay = document.getElementById(PREVIOUS)
let resultDisplay = document.getElementById(RESULT)


// ============ Functions ============
function setOperationListeners() {
    Array.from(document.getElementsByClassName("operation")).forEach((element) => {
        element.addEventListener("click", (e) => {
                updateOperation()
                let num1 = getFirstValue()
                let result
                let operationDisplay
                let operationSymbol = e.target.id
                let isConcatOperation = operation.length === 2 && BASIC_OPERATIONS.includes(operationSymbol)

                if (isConcatOperation) {
                    const [_, result] = launchOperation()
                    updateDisplay(result + operationSymbol, 0)
                    operation.push(operationSymbol)
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
                            operationDisplay = operation[0] + operationSymbol
                            operation.push(operationSymbol)
                            break
                    }

                    if (!BASIC_OPERATIONS.includes(operationSymbol) && BASIC_OPERATIONS.includes(operation[1])) {
                        resultDisplay.value = result
                        let savedOperation = [operation[0], operation[1]]

                        let [_, result2] = launchOperation()
                        result = result2
                        operationDisplay = savedOperation[0] + savedOperation[1] + operationDisplay
                    } else if (result) {
                        operation = [result]
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
    if (!operation[0]) {
        operation.push(resultDisplay.value)
    }
}

function getFirstValue() {
    return parseFloat(resultDisplay.value)
}

function launchOperation() {
    let [num1, operationSymbol, num2] = getOperationData()

    switch (operationSymbol) {
        case "+":
            memoryResult = CALCULATOR.aggregation(num1, num2)
            break
        case "-":
            memoryResult = CALCULATOR.subtraction(num1, num2)
            break
        case "*":
            memoryResult = CALCULATOR.multiplication(num1, num2)
            break
        case "/":
            memoryResult = CALCULATOR.division(num1, num2)
            break
    }

    operation = [memoryResult]
    const visualOperation = "".concat(num1.toString(), operationSymbol, num2.toString(), ' =')

    return [visualOperation, memoryResult]
}

function getOperationData() {
    // [num1, operationSymbol, num2]
    operation.push(resultDisplay.value)
    return [parseFloat(operation[0]), operation[1], parseFloat(operation[2])]
}

function updateDisplay(previousOperation, result) {
    previousDisplay.value = previousOperation
    resultDisplay.value = result
}


function setBasicOperationsListener() {
    document.getElementById("=").addEventListener("click", () => {
        if (!Array.from(previousDisplay.value).some((letter) => letter === '=')) {
            const [visualOperation, result] = launchOperation()
            updateDisplay(visualOperation, result)
        }
    })
}

function setCleanListeners() {
    Array.from(document.getElementsByClassName("clean")).forEach((element) => {
        element.addEventListener("click", (e) => {
            switch (e.target.id) {
                case "⌫":
                    removeLast()
                    break
                case "clear" :
                    clearAll()
                    break
            }
        })
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
    operation = []
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
    console.log(Array.from(previous).some((letter) => '=' === letter))
    if (Array.from(previous).some((letter) => '=' === letter)) {
        memoryResult = ''
        previousDisplay.value = ''
        operation = []
        resultDisplay.value = '0'
    }
}


// ============ Listeners ============
setCleanListeners()
setBasicOperationsListener()
setOperationListeners()
setChangeSymbolListener()
setNumbersListeners()
