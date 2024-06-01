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
                let finishedOperation = true
                let operationSymbol = e.target.id


                if (operation.length === 2 && BASIC_OPERATIONS.includes(operationSymbol)) {
                    launchOperation()

                } else {
                    switch (operationSymbol) {
                        case "√":
                            result = CALCULATOR.squareRoot(num1)
                            operationDisplay = "√" + num1
                            break

                        case "e":
                            result = CALCULATOR.exponential(num1)
                            operationDisplay = "e^" + num1
                            break

                        default:
                            result = 0
                            operationDisplay = operation[0] + operationSymbol
                            operation.push(operationSymbol)

                            finishedOperation = false
                            break
                    }
                    memoryResult = num1
                    console.log(memoryResult, operation)
                    updateDisplay(operationDisplay, result, finishedOperation)
                }
            }
        )
    })
}

function updateOperation() {
    //Si viene lleno con un valor anterior no se pone otro, que causaría repetición y que hubiera 4 valores en el array en vez de 3
    // es para las operaciones encadenadas
    // Add result data to the operation array if it's empty
    // It is for chained operations (Example 4+4 = 8+4)
    if (!operation[0]) {
        operation.push(resultDisplay.value)
    }
}

function getFirstValue() {
    return parseFloat(resultDisplay.value)
}

function updateDisplay(stringOperation, result, addEqual = true) {
    if (addEqual) {
        stringOperation += " ="
        operation = [result]
    }

    previousDisplay.value = stringOperation
    resultDisplay.value = result
}


function setBasicOperationsListener() {
    document.getElementById("=").addEventListener("click", () => {
        if (!Array.from(previousDisplay.value).some((letter) => letter === '=')) {
            launchOperation()
        }
    })
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
    updateDisplay("" + num1 + operationSymbol + num2, memoryResult)
}

function getOperationData() {
    // [num1, operationSymbol, num2]
    operation.push(resultDisplay.value)
    return [parseFloat(operation[0]), operation[1], parseFloat(operation[2])]
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
        cleanPreviousDisplay()

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
            cleanPreviousDisplay()

            let currentValue = resultDisplay.value
            if (!memoryResult) {
                memoryResult = parseFloat(currentValue)
            }

            if ((currentValue === '0' || currentValue === '-0') && e.target.id !== '.') {
                resultDisplay.value = currentValue.replaceAll('0', e.target.id)
            } else {
                resultDisplay.value += e.target.id
            }
            console.log(memoryResult, operation)
        })
    })
}

function cleanPreviousDisplay() {
    let previous = previousDisplay.value
    if (Array.from(previous).some((letter) => '=' === letter)) {
        previousDisplay.value = memoryResult
        operation = [memoryResult]
        resultDisplay.value = '0'
    }
}


// ============ Listeners ============
setCleanListeners()
setBasicOperationsListener()
setOperationListeners()
setChangeSymbolListener()
setNumbersListeners()
